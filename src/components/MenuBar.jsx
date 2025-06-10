import { Card, CardContent, CardTitle, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowLeftFromLine, CirclePlay, BadgeCheck, ClipboardCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SearchBox from "./SearchBox";
import { useLocation } from "react-router"; // Import useLocation
import { Progress } from "./ui/progress";
import { Clock } from "lucide-react";
import {courses as categories} from "@/mockdata/data"; // Assuming mockData is available

// Add navigate prop to MenuBar
const MenuBar = ({ completedChapters, completedTopics, filteredTopics, setSearchQuery, setContentType, selectedCategory, selectedTopic, selectedChapter, navigate }) => {
    let location = useLocation();

    // Helper function to find category from topic ID or chapter ID for navigation
    const findCategoryAndTopic = (idToFind, type) => {
        for (const category of categories) {
            for (const topic of category.topics) {
                if (type === 'topic' && String(topic.id) === String(idToFind)) {
                    return { categoryId: category.id, topicId: topic.id };
                }
                if (type === 'chapter') {
                    const chapter = topic.chapters.find(chap => String(chap.id) === String(idToFind));
                    if (chapter) {
                        return { categoryId: category.id, topicId: topic.id, chapterId: chapter.id };
                    }
                }
            }
        }
        return null;
    };


    const handleBackClick = () => {
        if (location.pathname.startsWith("/learn")) {
            navigate("/learn"); // Go back to base learn page
        } else if (location.pathname.startsWith("/test")) {
            navigate("/test"); // Go back to base test page
        }
    };

    const handleTopicClick = (topic) => {
        if (location.pathname.startsWith("/learn") && selectedCategory) {
            // Navigate to topic with category and topic ID
            navigate(`/learn/${selectedCategory.id}/${topic.id}`);
        } else if (location.pathname.startsWith("/test") && selectedCategory) {
            // Navigate to topic with category and topic ID for test
            navigate(`/test/${selectedCategory.id}/${topic.id}`);
        }
    };

    const handleChapterClick = (topic, chapter) => {
        if (location.pathname.startsWith("/learn") && selectedCategory) {
            // Navigate to chapter with category, topic, and chapter ID
            navigate(`/learn/${selectedCategory.id}/${topic.id}/${chapter.id}`);
            setContentType("video"); // Default to video when chapter is selected
        }
    };

    return (
        <div>
            <Card className="w-full md-w-[340px] h-fit" >
                <CardHeader  >
                    <CardTitle className="flex items-center justify-between text-lg">
                        {selectedCategory?.name || "Artificial Intelligence"}
                        <Button className="w-18  h-9 " size="sm" variant="outline" onClick={handleBackClick}>
                            <ArrowLeftFromLine />
                            back
                        </Button>
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <SearchBox onSearch={setSearchQuery}></SearchBox>
                    <Accordion type="single" collapsible className="w-full" defaultValue={selectedCategory?.id}>

                        {location.pathname.startsWith("/learn")
                            ? (filteredTopics.map(topic => (
                                <AccordionItem key={topic.id} value={topic.id}>
                                    <AccordionTrigger child={<Progress className=" h-1.5" value={40} />} className="">
                                        <div>
                                            {topic.name}
                                        </div>

                                    </AccordionTrigger>
                                    <AccordionContent className=" flex flex-col justify-items-start text-left ">
                                        {topic.chapters.map(chapter => (
                                            <Button
                                                key={chapter.id}
                                                variant="ghost"
                                                className={"justify-between pl-2 items-center".concat(selectedChapter?.id === chapter.id ? " bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" : "")}
                                                onClick={() => { handleChapterClick(topic, chapter) }}
                                            >
                                                <div className="flex gap-1 items-center">
                                                    {completedChapters.has(chapter.id) ? <BadgeCheck className="stroke-2 size-5  fill-primary text-secondary-foreground" /> : <CirclePlay className="stroke-2 size-4" />}
                                                    {chapter.name}
                                                </div>
                                                <p className={"text-muted-foreground size-4".concat(selectedChapter?.id === chapter.id ? " text-primary-foreground" : "")}>25m</p>
                                            </Button>
                                        ))}
                                    </AccordionContent>
                                </AccordionItem>
                            ))
                            )
                            : (
                                <div className=" pt-0 pb-4">
                                    <div className=" flex-col gap-3 first:mt-8 flex justify-items-start text-left ">
                                        {filteredTopics.map((topic) => (
                                            <Button
                                                key={topic.id}
                                                variant="ghost"
                                                className={"justify-between border-[1px] border-border active:bg-primary "}
                                                onClick={() => { handleTopicClick(topic) }}
                                            >
                                                <div className={"flex items-center gap-1 "}>
                                                    {completedTopics?.has(topic.name) ? <BadgeCheck className="stroke-2 size-5  fill-primary" /> : <ClipboardCheck className="stroke-1 size-5" />}
                                                    {topic.name}
                                                </div>
                                                <span className="flex items-center text-xs">
                                                    <Clock className="size-3 stroke-2" />
                                                    <p className="pt-1 pl-0.5">{topic.duration}</p>
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
    );
};

export default MenuBar;
