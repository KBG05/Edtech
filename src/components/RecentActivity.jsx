import { Button } from "./ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
import { Skeleton } from "./ui/skeleton"
import { Progress } from "./ui/progress"
import { ExternalLink } from "lucide-react"
import { useNavigate } from "react-router"

const RecentActivity=({isLoading, dashboardData})=>{
    const navigate=useNavigate();
    return(
        <div className=" px-2 md:px-6 mt-6 gap-12">
            <Card className="flex-1">
                <CardHeader>
                    <CardTitle className="text-lg md:text-2xl font-semibold mb-2">
                        Recent Activity
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    {
                        dashboardData.strong.map((topic)=>{
                            return(
                                isLoading
                                ?<Skeleton key={topic.name} className="w-full h-14"/>
                                :<Button key={topic.name} variant="outline" className=" flex justify-between h-fit" onClick={()=>{navigate(`/learn/${topic.categoryId}`)}}>
                                    <div className="text-xl">
                                            <p className="text-xl font-bold text-left flex gap-2">
                                                {topic.name}
                                                <ExternalLink className="self-center"/>
                                            </p>
                                            <p className="text-muted-foreground text-sm text-left">Last Accessed: {topic.duration} ago</p>
                                    </div>
                                    <div className="w-[30%] flex justify-between gap-6 ">
                                        <Progress value={topic.progress} className="border-border border-[1px]" />
                                        <p className="font-bold "> {topic.progress}%</p>
                                    </div>
                                </Button>
                            )
                        })
                    }
                </CardContent>

            </Card>
        </div>
    )
}

export default RecentActivity