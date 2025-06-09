import React from "react";
import { useState,useMemo, useEffect } from "react";
import { courses as categories} from "@/mockdata/data"
import CategorySelection from "@/components/CategorySelection";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import getCertificationQuestions from "@/mockdata/certifyData"
import Assesment from "@/components/Assesment";
import { useParams } from "react-router";

const Certify=()=>{
    const[selectedCategory, setSelectedCategory]=useState(null)
    const[searchQuery, setSearchQuery]=useState("")
    const navigate=useNavigate()

    const { categoryId } = useParams();
    useEffect(() => {
        if (!categoryId) {
            setSelectedCategory(null);
            return;
        }
        
        const foundCategory = categories.find(cat => String(cat.id) === categoryId);
        
        if (!foundCategory) {
            setSelectedCategory(null);
            navigate('/certify');
            return;
        }
        
        setSelectedCategory(foundCategory);
        
    }, [categoryId, categories, navigate]);
    
    
    const questionBank=useMemo(()=>{
        return getCertificationQuestions(categoryId)
    })
    const answerBank=useMemo(()=>{
        let s=[]
        for(let i=0;i<questionBank.length;i++){
            s.push("")
        }
        return s;
    })

    return(
        <div className="max-w-7xl m-auto p-6">
            {
                selectedCategory
                ?(
                    <Assesment
                    answerBank={answerBank}
                    questionBank={questionBank}
                    selectedCategory={selectedCategory}
                    selectedTopic={null}
                    setSelectedTopic={null}
                    >
                    </Assesment>
                )
                :(
                    <CategorySelection
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        categories={categories}
                        navigate={navigate}
                        header={"Certify"}
                        description={"Select a category to begin certification"}
                    />
                )
                
            }
        </div>
    )

}

export default Certify