import React from "react";
import { useState, useMemo } from "react";
import MenuBar from "@/components/MenuBar";
import mockdata from "@/mockdata/data"
import CategorySelection from "@/components/CategorySelection";
import ReactPlayer from "react-player";
import Assesment from "@/components/Assesment";
import QuestionNavigator from "@/components/QuestionNavigator";
import { testData } from "@/mockdata/testData";

const Test=()=>{
    const[selectedCategory, setSelectedCategory]=useState(null);
    const[selectedTopic,setSelectedTopic]=useState(null);
    const[searchQuery, setSearchQuery]=useState("");

    const filteredTopics=useMemo(()=>{
       if(!selectedCategory || !searchQuery){return selectedCategory?selectedCategory.topics:[];}

       return selectedCategory.topics.filter(topic=>{
            return topic.name.toLowerCase().includes(searchQuery.toLowerCase())
       });
    }, [selectedCategory, searchQuery]);

    return(
        <div className="max-w-7xl mx-auto p-6">
            
            {
                selectedTopic
                ?(
                    <Assesment 
                        testData={testData}
                        selectedTopic={selectedTopic}
                        questionData={testData}
                        selectedCategory={selectedCategory}
                        setSelectedTopic={setSelectedTopic}
                    />
                )
                :selectedCategory
                ?<div className="flex gap-6 ">
                    <MenuBar
                        filteredTopics={filteredTopics}
                        selectedCategory={selectedCategory}
                        setSearchQuery={setSearchQuery}
                        setSelectedCategory={setSelectedCategory}
                        setSelectedTopic={setSelectedTopic}
                        defaultValue={selectedCategory.id}
                        selectedTopic={selectedTopic}
                        completedTopics={new Set(selectedCategory.completedTopics)}
                    />
                    <Assesment/>
                </div>
                
                :<CategorySelection 
                        mockData={mockdata} 
                        setSearchQuery={setSearchQuery} 
                        setSelectedCategory={setSelectedCategory}
                        searchQuery={searchQuery}
                        header="Test"
                        description="select a course to take test on "
                />
                
            }
            
        </div>
            

    )
}

export default Test