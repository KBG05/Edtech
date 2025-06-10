import {ChartContainer } from "@/components/ui/chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "./ui/skeleton";
import { Button } from "./ui/button";
import { TrendingUp, TrendingDown, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router";

const StrongAndWeak=({dashboardData, isLoading})=>{
        
    const navigate=useNavigate()
    const handleWeakAreas=(categoryId, topicId)=>{
            navigate(`/learn/${categoryId}`)
        }

    return(<div className="flex flex-col md:flex-row justify-between px-2 md:px-6 gap-12">
                        <Card className="flex-1 mb-4 md:mb-0">
                            <CardHeader>
                                <CardTitle className=" text-xl md:text-2xl ">
                                    Strong Areas
                                </CardTitle>
                                <CardContent className="flex flex-col gap-2">
                                    {
                                        dashboardData.strong.map((topic)=>{
                                            return(
                                                isLoading
                                                ?<Skeleton key={topic.name} className="md:w-[520px] h-10 w-full"/>
                                                :<Button key={topic.name} variant="" className="hover:bg-strong-bg/80 flex  justify-start bg-strong-bg border-strong-border border-[1px] text-strong-text">
                                                    <TrendingUp/>
                                                    {topic.name}
                                                </Button>
                                            )
                                        })
                                    }
                                </CardContent>
                            </CardHeader>
                        </Card>
                        <Card className="flex-1">
                            <CardHeader>
                                <CardTitle className="text-xl md:text-2xl">
                                    Weak Areas
                                </CardTitle>
                                <CardContent className=" flex flex-col gap-2">
                                    {
                                        dashboardData.weak.map((topic)=>{
                                            return(
                                                
                                                    isLoading
                                                    ?<Skeleton key={topic.name} className=" w-full md:w-[520px] h-10"/>
                                                    :<Button 
                                                        key={topic.name}
                                                        className="hover:bg-weak-bg/80 flex justify-between bg-weak-bg border-weak-border border-[1px] text-weak-text"
                                                        onClick={()=>{handleWeakAreas(topic.categoryId, topic.id)}}
                                                    >
                                                        <div className="flex justify-between gap-2">
                                                            <TrendingDown/>
                                                            {topic.name}
                                                        </div>
                                                        <ExternalLink className=""/>
                                                    </Button>
                                                
                                            )
                                        })
                                    }
                                </CardContent>
                            </CardHeader>
                        </Card>
                    </div>
    )
}

export default StrongAndWeak