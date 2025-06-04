import React from "react";
import { useState,useMemo } from "react";
import { Card, CardContent,CardDescription,CardTitle, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import mockdata from "@/mockdata/data"
import SearchBox from "@/components/SearchBox";
import { ChevronRight } from "lucide-react";
import { ArrowLeftFromLine } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

const Learn=()=>{
    const[selectedCategory, setSelectedCategory]=useState(null);
    const[selectedTopic,setSelectedTopic]=useState(null);
    const[selectedChapter, setSelectedChapter]=useState(null);
    const[contentType, setContentType]=useState("video");
    const[searchQuery, setSearchQuery]=useState("");
    
    const filteredTopics=useMemo(()=>{
       if(!selectedCategory || !searchQuery)return selectedCategory?selectedCategory.topics:[];

       return selectedCategory.topics.filter(topic=>{
            topic.name.toLowerCase().includes(searchQuery.toLowerCase())||
            topic.chapters.some(chapter=>{
                chapter.toLowerCase().includes(searchQuery.toLowerCase())
            });
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

    const renderContent=()=>(
        <div className="flex gap-6">
            <div>
                <Card className="w-80 h-fit" >
                    <CardHeader  >
                        <CardTitle className="flex items-center justify-between text-lg">
                            {/*selectedCategory.name||*/"Artificial Intelligence"}
                            <Button className="w-18  h-9 " size="sm" variant="outline" onClick={()=>{setSelectedChapter(null);setSelectedTopic(null); setSelectedCategory(null)}}>
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
                                                onClick={()=>{setSelectedChapter(chapter)}}
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

        </div>

    );
    
    return (
        <div className="max-w-7xl mx-auto p-6">
            {selectedCategory ? renderContent() : renderCategorySelection()}
        </div>
    )
}

export default Learn