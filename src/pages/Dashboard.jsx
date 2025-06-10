import React, { useEffect, useState } from "react";
import { CardContent } from "@/components/ui/card";
import { ChartRadialText } from "@/components/chartRadialText";
import { dashboardData } from "@/mockdata/data";
import { Skeleton } from "@/components/ui/skeleton";
import StrongAndWeak from "@/components/strongandweak";
import RecentActivity from "@/components/RecentActivity";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-[98vw] md:max-w-[70%] mx-auto pt-5 px-2"> {/* fix */}
      <div className="space-y-8">
        <div className="px-6">
          <p className="text-3xl md:text-4xl  font-bold">Welcome</p>
          <p className="text-muted-foreground text-base md:text-lg pt-1">
            Here's your learning progress
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between"> {/* fix */}
          <CardContent className="w-full sm:w-1/4 min-h-[190px] flex-1"> {/* fix */}
            {isLoading ? (
              <Skeleton className="h-[150px] w-full" />
            ) : (
              <ChartRadialText chartUserData={{ title: "Bloom score", end: 270, score: 70, description: "Overall Performance" }} />
            )}
          </CardContent>
          <CardContent className="w-full sm:w-1/4 min-h-[190px] flex-1"> {/* fix */}
            {isLoading ? (
              <Skeleton className="h-[150px] w-full" />
            ) : (
              <ChartRadialText chartUserData={{ title: "Remember & Apply", end: 180, score: 50, description: "Recall, apply information" }} />
            )}
          </CardContent>
          <CardContent className="w-full sm:w-1/4 min-h-[190px] flex-1"> {/* fix */}
            {isLoading ? (
              <Skeleton className="h-[150px] w-full" />
            ) : (
              <ChartRadialText chartUserData={{ title: "Analyze", end: 240, score: 50, description: "Break down, find patterns" }} />
            )}
          </CardContent>
          <CardContent className="w-full sm:w-1/4 min-h-[190px] flex-1"> {/* fix */}
            {isLoading ? (
              <Skeleton className="h-[150px] w-full" />
            ) : (
              <ChartRadialText chartUserData={{ title: "Apply & Practice", end: 80, score: 50, description: "Skill mastery, practice" }} />
            )}
          </CardContent>
        </div>
        <StrongAndWeak dashboardData={dashboardData} isLoading={isLoading} />
        <RecentActivity dashboardData={dashboardData} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Dashboard;