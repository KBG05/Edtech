import React from "react";
import { useState,useMemo } from "react";
import { Card, CardContent,CardDescription,CardTitle, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import mockdata from "@/mockdata/data"
import SearchBox from "@/components/SearchBox";
import { ChevronRight } from "lucide-react";
import { ArrowLeftFromLine } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import ReactPlayer from "react-player";
import { Book } from "lucide-react";

const Learn=()=>{
    const[selectedCategory, setSelectedCategory]=useState(null);
    const[selectedTopic,setSelectedTopic]=useState(null);
    const[selectedChapter, setSelectedChapter]=useState(null);
    const[contentType, setContentType]=useState("video");
    const[searchQuery, setSearchQuery]=useState("");
    
    const filteredTopics=useMemo(()=>{
       if(!selectedCategory || !searchQuery)return selectedCategory?selectedCategory.topics:[];

       return selectedCategory.topics.filter(topic=>{
            return topic.name.toLowerCase().includes(searchQuery.toLowerCase())||
                topic.chapters.forEach((chapter)=>{
                return chapter.name.toLowerCase().includes(searchQuery.toLowerCase())
            })
       });
    }, [selectedCategory, searchQuery]);
    
    // for category selection page
    const renderCategorySelection=()=>(
        <div>
            <div className="flex justify-between items-center">
                <div className="">
                    <h1 className="text-4xl font-bold mb-2">Learn</h1>
                    <p>Choose a category to start learning</p>
                </div>
                <SearchBox
                    onSearch={setSearchQuery}
                    placeholder="Search Categories"
                />
            </div>

            <div className="grid grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-3  mt-5">
                {mockdata.filter(category=>{
                    return(
                        !searchQuery||category.name.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                }).map(category=>(
                    <Card key={category.id} onClick={()=>{setSelectedCategory(category)}} className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105">
                        <CardHeader>
                            <CardTitle className="flex justify-between items-center">
                                {category.name}
                                <ChevronRight></ChevronRight>
                            </CardTitle>
                            <CardDescription>{category.description}</CardDescription>
                        </CardHeader>
                    </Card>
                ))
                }

            </div>
        </div>
    );
    // for  actual learn page
    const renderContent=()=>(
        <div className="flex gap-6">
            <div>
                <Card className="w-80 h-fit" >
                    <CardHeader  >
                        <CardTitle className="flex items-center justify-between text-lg">
                            {selectedCategory?.name||"Artificial Intelligence"}
                            <Button className="w-18  h-9 " size="sm" variant="outline" onClick={()=>{setSelectedChapter(null);setSelectedTopic(null); setSelectedCategory(null); setContentType("video")}}>
                                <ArrowLeftFromLine/>
                                back
                            </Button>
                        </CardTitle>
                    </CardHeader>

                    <CardContent>
                        <SearchBox onSearch={setSearchQuery}></SearchBox>
                        <Accordion type="single" collapsible className="w-full">
                            {filteredTopics.map(topic=>(
                                <AccordionItem key={topic.id} value={topic.id}>
                                    <AccordionTrigger>{topic.name}</AccordionTrigger>
                                    <AccordionContent className=" flex-col flex justify-items-start text-left ">
                                        {topic.chapters.map(chapter=>(
                                            <Button
                                                key={chapter.id} 
                                                variant={selectedChapter?.id === chapter.id ? "outline" : "ghost"}
                                                className={"justify-start pl-2"  }
                                                onClick={()=>{setSelectedChapter(chapter);setSelectedTopic(topic)}}
                                            >
                                                {chapter.name}
                                            </Button>
                                        ))}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>    
                    </CardContent>

                </Card>
            </div>

            <div className="flex-1">
                <Card className="">
                    <CardHeader>
                            {
                                selectedTopic
                                ?(
                                    <div className="flex justify-between">
                                        <div>
                                            <CardTitle className=" text-3xl">{selectedTopic.name}</CardTitle>
                                            <CardDescription className="text-xl ">{"Topic: "+selectedChapter.name}</CardDescription>
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
                                ):(
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
            {selectedCategory ? renderContent() : renderCategorySelection()}
        </div>
    )
}

export default Learn