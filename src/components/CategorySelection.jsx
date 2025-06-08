import SearchBox from "@/components/SearchBox";
import { Card,CardDescription,CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Progress } from "./ui/progress";
import { Clock } from "lucide-react";
import { useLocation } from "react-router";

const CategorySelection=({
    searchQuery,
    setSearchQuery, 
    mockData, 
    setSelectedCategory,
    header,
    description
})=>{

    const location=useLocation()

    return(
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
                {mockData.filter(category=>(!searchQuery||category.name.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                ).map(category=>(
                            <Card key={category.id} onClick={()=>{setSelectedCategory(category);setSearchQuery("")}} className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105">
                                <CardHeader>
                                    <CardTitle className="flex justify-between items-center mb-5">
                                        {category.name}
                                        <ChevronRight></ChevronRight>
                                    </CardTitle>
                                    <CardDescription>{category.description}</CardDescription>
                                </CardHeader>

                                <CardContent>
                                    {
                                        location.pathname==="/learn"
                                        ?<>
                                            <div className="flex justify-between items-center text-muted-foreground text-sm mb-2">
                                                <p>Progress</p>
                                                <p className="text-foreground">50%</p> {/*todo*/}
                                            </div>
                                            <Progress className="mb-5" value={50}/>
                                        </>
                                        :"" 
                                    }
                                    <div className=" space-y-1 justify-between text-muted-foreground text-sm">
                                        <div className="flex justify-between">
                                            <p>Duration:</p>
                                            <div className="flex gap-1 items-center">
                                                <Clock className="stroke-1 size-4" />   
                                                <p className="pt-0.5">12h:30m</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            {location.pathname==="/learn" || location.pathname==="/test"?<p>Topics:</p>:""}
                                            <p>3 topics</p>
                                        </div>
                                        
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    )
                }

            </div>
        </div>
    )
}
export default CategorySelection