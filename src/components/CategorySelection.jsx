import SearchBox from "@/components/SearchBox";
import { Card, CardDescription, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Progress } from "./ui/progress";
import { Clock } from "lucide-react";
import { useLocation, useNavigate } from "react-router"; // Import useNavigate

const CategorySelection = ({
    searchQuery,
    setSearchQuery,
    categories,
    header,
    description,
    navigate // Receive navigate prop
}) => {

    const location = useLocation();
    const localNavigate = useNavigate(); // Use localNavigate to avoid prop name conflict if needed, or just 'navigate'

    const handleCategoryClick = (category) => {
        if (location.pathname === "/learn") {
            localNavigate(`/learn/${category.id}`); // Navigate to /learn/categoryId
        } else if (location.pathname === "/test") {
            localNavigate(`/test/${category.id}`); // Navigate to /test/categoryId
        }else if(location.pathname==="/certify"){
            localNavigate(`/certify/${category.id}`);
        }
        setSearchQuery(""); // Clear search query on category selection
    };

    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="">
                    <h1 className="text-4xl font-bold mb-2">{header}</h1>
                    <p>{description}</p>
                </div>
                <SearchBox
                    onSearch={setSearchQuery}
                    placeholder="Search Categories"
                />
            </div>

            <div className="grid grid-cols-1 gap-5  md:grid-cols-2 lg:grid-cols-3  mt-5">
                {categories.filter(category =>
                    (!searchQuery || category.name.toLowerCase().includes(searchQuery.toLowerCase()))
                ).map(category => (
                    <Card key={category.id} onClick={() => { handleCategoryClick(category) }} className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105">
                        <CardHeader>
                            <CardTitle className="flex justify-between items-center mb-5">
                                {category.name}
                                <ChevronRight></ChevronRight>
                            </CardTitle>
                            <CardDescription>{category.description}</CardDescription>
                        </CardHeader>

                        <CardContent>
                            {
                                location.pathname === "/learn"
                                    ? <>
                                        <div className="flex justify-between items-center text-muted-foreground text-sm mb-2">
                                            <p>Progress</p>
                                            <p className="text-foreground">{category.progress}%</p> {/*todo*/}
                                        </div>
                                        <Progress className="mb-5" value={category.progress} />
                                    </>
                                    : ""
                            }
                            <div className=" space-y-1 justify-between text-muted-foreground text-sm">
                                <div className="flex justify-between">
                                    <p>Duration:</p>
                                    <div className="flex gap-1 items-center">
                                        <Clock className="stroke-1 size-4" />
                                        <p className="pt-0.5">{category.duration}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    {location.pathname === "/learn" || location.pathname === "/test" ? <><p>Topics:</p><p>3 topics</p></> :""}
                                </div>
                                <div className="flex justify-between">
                                    {location.pathname==="/certify" || location.pathname==="/test"
                                    ?(
                                        <>
                                            <p>Questions:</p>
                                            <p>{category.questions}</p>
                                        </> 
                                    ):""
                                    }
                                </div>

                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default CategorySelection;
