import { Card, CardContent, CardTitle, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowLeftFromLine, Clock, CirclePlay, BadgeCheck, ClipboardCheck } from "lucide-react";
import { Accordion,  AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SearchBox from "./SearchBox";
import { useLocation } from "react-router";
import { Progress } from "./ui/progress";
import mockData from "@/mockdata/data"

const MenuBar=({completedChapters,completedTopics,setSelectedChapter, defaultValue, setSelectedTopic, filteredTopics, setSearchQuery, setContentType, setSelectedCategory, selectedCategory, selectedChapter, selectedTopic})=>{
    let location=useLocation()

    return(
        <div>
                <Card className="w-80 h-fit" >
                    <CardHeader  >
                        <CardTitle className="flex items-center justify-between text-lg">
                            {selectedCategory?.name||"Artificial Intelligence"}
                            <Button className="w-18  h-9 " size="sm" variant="outline" onClick={()=>{setSelectedChapter?(null):"";setSelectedTopic(null); setSelectedCategory(null); setContentType?("video"):""; setSearchQuery("")}}>
                                <ArrowLeftFromLine/>
                                back
                            </Button>
                        </CardTitle>
                    </CardHeader>

                    <CardContent>
                        <SearchBox onSearch={setSearchQuery}></SearchBox>
                        <Accordion  type="single" collapsible className="w-full" defaultValue={defaultValue} >
                            
                            { location.pathname==="/learn"
                                    ?(filteredTopics.map(topic=>(
                                        <AccordionItem  key={topic.id} value={topic.id}>
                                            <AccordionTrigger child={<Progress className=" h-1.5" value={40}/>} className="">
                                                <div>
                                                    {topic.name}
                                                </div>
                                                    
                                            </AccordionTrigger>
                                            <AccordionContent  className=" flex-col flex justify-items-start text-left ">
                                                {topic.chapters.map(chapter=>(
                                                    <Button
                                                        key={chapter.id} 
                                                        variant="ghost"
                                                        className={"justify-between pl-2 items-center".concat(selectedChapter?.id===chapter.id?" bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground":"")  }
                                                        onClick={()=>{setSelectedChapter(chapter);setSelectedTopic(topic)}}
                                                    >
                                                        <div className="flex gap-1 items-center">
                                                            {completedChapters.has(chapter.id)?<BadgeCheck className="stroke-2 size-5  fill-primary"/>:<CirclePlay className="stroke-2 size-4" />}
                                                            {chapter.name}
                                                        </div>
                                                        <p className={"text-muted-foreground size-4".concat(selectedChapter?.id===chapter.id?" text-primary-foreground":"")}>25m</p>
                                                    </Button>
                                                ))}
                                            </AccordionContent>
                                        </AccordionItem>
                                        ))
                                    )
                                    :(
                                        <div className=" pt-0 pb-4">
                                            <div className=" flex-col gap-3 first:mt-8 flex justify-items-start text-left ">
                                                {filteredTopics.map((topic)=>(
                                                    <Button
                                                    key={topic.id}
                                                    variant="ghost"
                                                    className={"justify-between border-[1px] border-border active:bg-primary ".concat(completedTopics.has(topic.name)?"bg-primary text-primary-foreground hover:text-primary-foreground hover:bg-primary":"")}
                                                    onClick={()=>{setSelectedTopic(topic);}}
                                                    >
                                                        <div className={"flex items-center gap-1 "}>
                                                            {completedTopics.has(topic.name)?<BadgeCheck className="stroke-2 size-5  fill-primary"/> :<ClipboardCheck className="stroke-1 size-5"/>}
                                                            {topic.name}
                                                        </div>
                                                        <span className="flex items-center text-xs">
                                                            <Clock className="size-3 stroke-2"/>
                                                            <p className="pt-1 pl-0.5">25m</p>
                                                        </span>
                                                    </Button>
                                                ))}
                                            </div>
                                        </div>
                                    )
                            }
                        </Accordion>    
                    </CardContent>

                </Card>
            </div>
    )
}

export default MenuBar