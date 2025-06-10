import SearchBox from "@/components/SearchBox";
import {
  Card, CardDescription, CardTitle, CardHeader, CardContent,
} from "@/components/ui/card";
import { ChevronRight, Clock } from "lucide-react";
import { Progress } from "./ui/progress";
import { Skeleton } from "./ui/skeleton";
import { useLocation, useNavigate } from "react-router";
import { useState, useEffect } from "react";

const CategorySelection = ({
  searchQuery,
  setSearchQuery,
  categories,
  header,
  description,
}) => {
  const location = useLocation();
  const localNavigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const handleCategoryClick = (category) => {
    if (location.pathname === "/learn") {
      localNavigate(`/learn/${category.id}`);
    } else if (location.pathname === "/test") {
      localNavigate(`/test/${category.id}`);
    } else if (location.pathname === "/certify") {
      localNavigate(`/certify/${category.id}`);
    } else if (location.pathname.startsWith("/test")) {
      localNavigate(`${location.pathname}/${category.id}`);
    }
    setSearchQuery("");
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div >
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
        {isLoading ? (
          <>
            <Skeleton className="h-20 w-full md:w-[30%]" />
            <Skeleton className="h-10 w-full md:w-[40%]" />
          </>
        ) : (
          <>
            <div className="space-y-1">
              <h1 className="text-2xl mb-2 md:text-4xl font-bold">{header}</h1>
              <p className="text-base md:text-lg text-muted-foreground">{description}</p>
            </div>
            <div className="w-full md:w-auto">
              <SearchBox
                onSearch={setSearchQuery}
                placeholder="Search Categories"
              />
            </div>
          </>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories
          .filter((category) =>
            !searchQuery || category.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((category) => (
            <Card
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className="hover:text-accent-foreground cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
            >
              {isLoading ? (
                <>
                  <Skeleton className="h-16 w-[90%] m-auto mt-4" />
                  <Skeleton className="h-44 w-[90%] m-auto my-4" />
                </>
              ) : (
                <>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center mb-2 text-lg sm:text-xl">
                      {category.name}
                      <ChevronRight />
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {category.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {(location.pathname === "/learn" || location.pathname === "/test") && (
                      <>
                        <div className="flex justify-between text-sm text-muted-foreground mb-1">
                          <p>
                            {location.pathname === "/learn"
                              ? "Course Progress"
                              : "Tests Completed"}
                          </p>
                          <p className="text-foreground">{category.progress}%</p>
                        </div>
                        <Progress className="mb-4" value={category.progress} />
                      </>
                    )}

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <p>Duration:</p>
                        <div className="flex items-center gap-1">
                          <Clock className="size-4 stroke-1" />
                          <p>
                            {location.pathname === "/learn"
                              ? category.totalDuration
                              : category.duration}
                          </p>
                        </div>
                      </div>

                      {(location.pathname === "/learn" || location.pathname === "/test") && (
                        <div className="flex justify-between">
                          <p>Topics:</p>
                          <p>3 topics</p>
                        </div>
                      )}

                      {(location.pathname === "/certify" ||
                        location.pathname.startsWith("/test")) && (
                        <div className="flex justify-between">
                          <p>Questions:</p>
                          <p>{category.questions}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </>
              )}
            </Card>
          ))}
      </div>
    </div>
  );
};

export default CategorySelection;
