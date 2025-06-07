import React from "react";
import { useState,useMemo } from "react";
import { Card, CardContent,CardDescription,CardTitle, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import mockdata from "@/mockdata/data"
import ReactPlayer from "react-player";
import { Book } from "lucide-react";
import CategorySelection from "@/components/CategorySelection";
import MenuBar from "@/components/MenuBar";

const Learn=()=>{
    const[selectedCategory, setSelectedCategory]=useState(null);
    const[selectedTopic,setSelectedTopic]=useState(null);
    const[selectedChapter, setSelectedChapter]=useState(null);
    const[contentType, setContentType]=useState("video");
    const[searchQuery, setSearchQuery]=useState("");
    const[completedChapters, setCompletedChapters]=useState(new Set(["ai-1-1","ai-1-2", "ml-3-1", "dl-1-1" ]));
    
    const filteredTopics=useMemo(()=>{
       if(!selectedCategory || !searchQuery){return selectedCategory?selectedCategory.topics:[];}

       return selectedCategory.topics.filter(topic=>{
            return topic.name.toLowerCase().includes(searchQuery.toLowerCase())
       });
    }, [selectedCategory, searchQuery]);
    

    // for  actual learn page
    const renderContent=()=>(
        <div className="flex gap-6">
            <MenuBar
                filteredTopics={filteredTopics}
                selectedCategory={selectedCategory}
                selectedChapter={selectedChapter}
                setContentType={setContentType}
                setSearchQuery={setSearchQuery}
                setSelectedCategory={setSelectedCategory}
                setSelectedTopic={setSelectedTopic}
                setSelectedChapter={setSelectedChapter}
                completedChapters={completedChapters}
                setCompletedChapters={setCompletedChapters}
            />

            <div className="flex-1">
                <Card className="">
                    <CardHeader>
                            {
                                selectedTopic
                                ?(
                                    <div className="flex justify-between">
                                        <div>
                                            <CardTitle className=" text-3xl">{selectedTopic.name}</CardTitle>
                                            <CardDescription className="text-xl ">{"Topic: "+selectedChapter?.name}</CardDescription>
                                        </div>
                                        <div>
                                            <Button 
                                                variant={contentType==='video'?"default":"outline"}
                                                className="w-26 h-11 text-md "
                                                onClick={()=>setContentType("video")}
                                            >
                                                Video
                                            </Button>
                                            <Button 
                                                variant={contentType==='read'?"default":"outline"}
                                                className="w-26 h-11 ml-2 text-md"
                                                onClick={()=>setContentType("read")}
                                            >
                                                Read
                                            </Button>
                                        </div>
                                    </div>
                                )
                                :(
                                    <CardTitle className={!selectedTopic?"text-3xl flex-1":"flex-1"}>{selectedTopic?.name || "WELCOME"}</CardTitle>
                                )
                                
                            }
                    </CardHeader>

                    <CardContent className="min-w-auto rounded-2xl pl-7 pr-7 pb-7 pt-0 ">
                        {
                            selectedTopic
                            ?(
                                contentType==="video"
                                ?(
                                    <ReactPlayer  width="100%" height="100%" url="/intro.mp4"  muted={true} controls></ReactPlayer>
                                )
                                :(
                                    <p>
                                        This is the reading content for {selectedChapter.name}. In a real application,
                                        this would contain comprehensive educational material, diagrams, and
                                        interactive elements to help you learn the topic effectively.
                                    </p>
                                )
                            )
                            :(
                                <div className="text-center ">
                                    <Book className="w-16 h-16 mx-auto mb-4 opacity-50"></Book>
                                    <p className="text-muted-foreground text-xl">Select a Topic to Start Learning</p>
                                </div>
                            )
                        }
                    </CardContent>
                </Card>
            </div>
            
        </div>

    );
    
    return (
        <div className="max-w-7xl mx-auto p-6">
            {selectedCategory 
                ? renderContent() 
                : <CategorySelection 
                    mockData={mockdata} 
                    setSearchQuery={setSearchQuery} 
                    setSelectedCategory={setSelectedCategory}
                    searchQuery={searchQuery}
                    header="Learn"
                    description="select a course to start learning "
                  />
            }
        </div>
    )
}

export default Learn