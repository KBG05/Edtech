import React from "react";
import { useState, useMemo, useEffect } from "react";
import MenuBar from "@/components/MenuBar";
import { courses as categories} from "@/mockdata/data";
import CategorySelection from "@/components/CategorySelection";
import ReactPlayer from "react-player";
import { useLocation, useParams, useNavigate } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import Certify from "./Certify";

const Learn = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [contentType, setContentType] = useState("video");
    const [searchQuery, setSearchQuery] = useState("");
    const [completedChapters, setCompletedChapters] = useState(new Set(["ai-1-1", "ai-1-2", "ml-3-1", "dl-1-1"]));

    const location = useLocation();
    const navigate = useNavigate();
    const { categoryId, topicId, chapterId } = useParams();

    useEffect(() => {
        // Reset all states if no categoryId is present in the URL
        if (!categoryId) {
            setSelectedCategory(null);
            setSelectedTopic(null);
            setSelectedChapter(null);
            return;
        }

        // Attempt to find the category based on categoryId
        const foundCategory = categories.find(cat => String(cat.id) === categoryId);

        if (!foundCategory) {
            // If category not found, reset all states and navigate to base learn page
            setSelectedCategory(null);
            setSelectedTopic(null);
            setSelectedChapter(null);
            navigate('/learn');
            return;
        }

        // If category found, set it
        setSelectedCategory(foundCategory);
        let currentTopic = null;
        let currentChapter = null;

        if (topicId) {
            // Attempt to find the topic within the found category
            currentTopic = foundCategory.topics.find(top => String(top.id) === topicId);
            if (currentTopic) {
                setSelectedTopic(currentTopic);
                if (chapterId) {
                    // Attempt to find the chapter within the found topic
                    currentChapter = currentTopic.chapters.find(chap => String(chap.id) === chapterId);
                    setSelectedChapter(currentChapter || null); // Set chapter or null if not found
                } else {
                    setSelectedChapter(null); // No chapterId, so no selected chapter
                }
            } else {
                setSelectedTopic(null); // Topic not found
                setSelectedChapter(null); // No chapter if topic not found
            }
        } else {
            setSelectedTopic(null); // No topicId, so no selected topic
            setSelectedChapter(null); // No chapter if no topic
        }

    }, [categoryId, topicId, chapterId, categories, navigate]);

    const filteredTopics = useMemo(() => {
        if (!selectedCategory) {
            return [];
        }
        if (!searchQuery) {
            return selectedCategory.topics;
        }
        return selectedCategory.topics.filter(topic =>
            topic.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [selectedCategory, searchQuery]);

    // for actual learn page
    const renderContent = () => (
        <div className="flex gap-6">
            <MenuBar
                filteredTopics={filteredTopics}
                selectedCategory={selectedCategory}
                selectedTopic={selectedTopic}
                selectedChapter={selectedChapter}
                setContentType={setContentType}
                setSearchQuery={setSearchQuery}
                setCompletedChapters={setCompletedChapters}
                navigate={navigate}
                completedChapters={completedChapters}
            />

            <div className="flex-1">
                <Card className="">
                    <CardHeader>
                        {
                            selectedTopic
                                ? (
                                    <div className="flex justify-between">
                                        <div>
                                            <CardTitle className=" text-3xl">{selectedTopic.name}</CardTitle>
                                            <CardDescription className="text-xl ">{"Topic: " + selectedChapter?.name}</CardDescription>
                                        </div>
                                        <div>
                                            <Button
                                                variant={contentType === 'video' ? "default" : "outline"}
                                                className="w-26 h-11 text-md "
                                                onClick={() => setContentType("video")}
                                            >
                                                Video
                                            </Button>
                                            <Button
                                                variant={contentType === 'read' ? "default" : "outline"}
                                                className="w-26 h-11 ml-2 text-md"
                                                onClick={() => setContentType("read")}
                                            >
                                                Read
                                            </Button>
                                        </div>
                                    </div>
                                )
                                : (
                                    <CardTitle className={!selectedTopic ? "text-3xl flex-1" : "flex-1"}>{selectedTopic?.name || "WELCOME"}</CardTitle>
                                )

                        }
                    </CardHeader>

                    <CardContent className="min-w-auto rounded-2xl pl-7 pr-7 pb-7 pt-0 ">
                        {
                            selectedTopic
                                ? (
                                    contentType === "video"
                                        ? (
                                            <ReactPlayer width="100%" height="100%" url="/intro.mp4" muted={true} controls></ReactPlayer>
                                        )
                                        : (
                                            <p>
                                                This is the reading content for {selectedChapter?.name}. In a real application,
                                                this would contain comprehensive educational material, diagrams, and
                                                interactive elements to help you learn the topic effectively.
                                            </p>
                                        )
                                )
                                : (
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
                    categories={categories}
                    setSearchQuery={setSearchQuery}
                    navigate={navigate}
                    searchQuery={searchQuery}
                    header="Learn"
                    description="select a course to start learning "
                />
            }
        </div>
    );
};

export default Learn;
