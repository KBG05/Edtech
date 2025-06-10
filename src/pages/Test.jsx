import React from "react";
import { useState, useMemo, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import MenuBar from "@/components/MenuBar";
import { courses as categories} from "@/mockdata/data";
import CategorySelection from "@/components/CategorySelection";
import Assesment from "@/components/Assesment";
import { testData } from "@/mockdata/testData";
import { topics } from "@/mockdata/testData";
const Test = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const navigate = useNavigate();
    const { categoryId, topicId } = useParams();

    useEffect(() => {
        if (!categoryId) {
            setSelectedCategory(null);
            setSelectedTopic(null);
            return;
        }

        const foundCategory = categories.find(cat => String(cat.id) === categoryId);

        if (!foundCategory) {
            setSelectedCategory(null);
            setSelectedTopic(null);
            navigate('/test');
            return;
        }

        setSelectedCategory(foundCategory);
        let currentTopic = null;

        if (topicId) {
            currentTopic = foundCategory.topics.find(top => String(top.id) === topicId);
            setSelectedTopic(currentTopic || null);
        } else {
            setSelectedTopic(null);
        }

    }, [categoryId, topicId, categories, navigate]);

    const questionBank = useMemo(() => {
        if (selectedCategory && selectedTopic && testData && testData[selectedCategory.id] && testData[selectedCategory.id][selectedTopic.id]) {
            return testData[selectedCategory.id][selectedTopic.id];
        }
        return [];
    }, [selectedCategory, selectedTopic, testData]);

    const answerBank = useMemo(() => {
        return questionBank.map((question) => {
            if (question.options && typeof question.correct !== 'undefined' && question.options[question.correct]) {
                return String(question.options[question.correct]).trim();
            }
            return null;
        }).filter(answer => answer !== null);
    }, [questionBank]);



    return (
        <div className="max-w-7xl mx-auto p-2 md:p-6">
            {
                selectedTopic && selectedCategory ? (
                <div className="flex flex-col lg:flex-row gap-4 w-full">
                    <Assesment
                        questionBank={questionBank}
                        answerBank={answerBank}
                        selectedTopic={selectedTopic}
                        setSelectedTopic={setSelectedTopic}
                        selectedCategory={selectedCategory}
                    />
                </div>
                ) : selectedCategory ? (
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* <CategorySelection
                        categories={topics[selectedCategory.id]}
                        description={""}
                        header={""}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        /> */}
                        {/* <MenuBar
                            filteredTopics={filteredTopics}
                            selectedCategory={selectedCategory}
                            selectedTopic={selectedTopic}
                            setSearchQuery={setSearchQuery}
                            navigate={navigate}
                            defaultValue={selectedCategory.id}
                            completedTopics={new Set(selectedCategory.completedTopics || [])}
                        /> */}
                        <Assesment
                            selectedTopic={null}
                            questionBank={[]}
                            answerBank={[]}
                            child={<CategorySelection
                            categories={topics[selectedCategory.id]}
                            description={""}
                            header={""}
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                        />}
                        />
                    </div>
                ) : (
                    <CategorySelection
                        categories={categories}
                        setSearchQuery={setSearchQuery}
                        navigate={navigate}
                        searchQuery={searchQuery}
                        header="Test"
                        description="Select a course to take test on"
                    />
                )
            }
        </div>
    );
};

export default Test;
