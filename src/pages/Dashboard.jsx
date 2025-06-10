import React, { useEffect } from "react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { ChartRadialText, description } from "@/components/chartRadialText";
import { dashboardData } from "@/mockdata/data";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingDown, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router";
import { Skeleton } from "@/components/ui/skeleton";
import StrongAndWeak from "@/components/strongandweak";
import RecentActivity from "@/components/RecentActivity";

const Dashboard=()=>{
    const [isLoading, setIsLoading]=useState(true)
    const navigate=useNavigate()

    useEffect(()=>{
        const timer=setTimeout(()=>{
            setIsLoading(false);
        },1500)

        return ()=>{
            clearTimeout(timer)
        }
    }, [])
    return(
        <div className="max-w-[70%] mx-auto pt-5">
            <div className="space-y-12">
                <div className="px-6" >
                    <p className="text-5xl font-bold">Welcome</p>
                    <p className="text-muted-foreground text-lg pt-1">Here's your learning progress</p>
                </div>
                <div className="flex  justify-between ">
                    
                        <CardContent className="flex-1 min-w-[25%] max-w-[25%]">
                            {
                                isLoading
                                ?<>
                                    <Skeleton className="size-[100%]"/>
                                </>
                                :<ChartRadialText
                                    chartUserData={{title:"Bloom score", end:270, score:70, description:"Overall Performance"}}
                                 />
                                
                        }
                        </CardContent>
                        {/* <div className="flex  justify-between  max-w-[75%]"> */}
                            <CardContent className="min-w-[25%]">
                                 {
                                isLoading
                                ?<>
                                    <Skeleton className="size-[100%]"/>
                                </>
                                :<ChartRadialText
                                    chartUserData={{title:"Remember & Apply", end:180, score:50, description:"Recall, apply information"}}
                                />
                            }
                            </CardContent>

                            <CardContent className="min-w-[25%]">
                                {
                                isLoading
                                ?<>
                                    <Skeleton className="size-[100%]"/>
                                </>
                                :<ChartRadialText
                                    chartUserData={{title:"Analyze", end:240, score:50, description:"Break down, find patterns"}}
                                />

                            }                           

                            </CardContent>
                            <CardContent className="min-w-[25%]">
                                {
                                isLoading
                                ?<>
                                    <Skeleton className="h-72 w-78"/>
                                </>
                                :<ChartRadialText
                                    chartUserData={{title:"Apply & Practice", end:80, score:50, description:"Skill mastery, practice"}}
                                />

                            } 
                                
                            </CardContent>
                        {/* </div> */}
                </div>

                <StrongAndWeak dashboardData={dashboardData}
                    isLoading={isLoading}
                />

                <RecentActivity
                    dashboardData={dashboardData}
                    isLoading={isLoading}
                />
            </div>
        </div>
    )
}

export default Dashboard