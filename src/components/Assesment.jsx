import React from "react";
import { useState } from "react";
import { Card, CardContent,CardDescription,CardTitle, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, Car } from "lucide-react";
import { ClipboardCheck } from "lucide-react";
import QuestionNavigator from "./QuestionNavigator";
import { Progress } from "./ui/progress";
import { Textarea } from "./ui/textarea";

const Assesment=({selectedTopic, testData, selectedCategory})=>{

    const[answers, setAnswers]=useState([0]);
    const[currentQuestion, setCurrentQuestion]=useState(1);
    // console.log(((answers.length-1)/testData[selectedCategory.id][selectedTopic.id].length)*100)
    const questionBank=selectedTopic?testData[selectedCategory?.id || 0][selectedTopic?.id ||1]:[];
    // console.log(questionBank)
    const handleAnswerChange=(e)=>{
        const newAnswers=[...answers];
        newAnswers[currentQuestion]=e;
        setAnswers(newAnswers);

    }

    return(selectedTopic
        ?(
            <div className="flex gap-6">
                <QuestionNavigator
                        selectedTopic={selectedTopic}
                        questionData={testData}
                        selectedCategory={selectedCategory}
                        answers={answers}
                        currentQuestion={currentQuestion}
                        setCurrentQuestion={setCurrentQuestion}
                    />
                <div className="flex-1 space-y-5">
                    <b className="text-4xl">{selectedTopic.name}</b>
                    
                    <Card>
                        <div className="w-[95%] m-auto">
                            <p className="text-sm pb-4">Question {currentQuestion} of {questionBank.length} </p>
                            <Progress
                                className=""
                                value={((currentQuestion)/questionBank.length)*100}
                            />
                        </div>
                    </Card>
                    <Card>
                        <CardHeader className="text-xl font-bold">
                            Q{currentQuestion}. {questionBank[currentQuestion-1].question}
                        </CardHeader>
                        <CardContent>
                            <Textarea className="h-36" placeholder="input your answer"
                                value={answers[currentQuestion]||""}
                                onChange={e=>{handleAnswerChange(e.target.value)}}

                            />
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
        :(
            <div className="flex-1 ">
                <Card className="">
                    <CardHeader>
                            {
                                <CardTitle className={!selectedTopic?"text-3xl flex-1":"flex-1"}>{selectedTopic?.name || "WELCOME"}</CardTitle>
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
                                    <ClipboardCheck className="w-16 h-16 mx-auto mb-4 opacity-50"></ClipboardCheck>
                                    <p className="text-muted-foreground text-xl">Select a Test to Attempt</p>
                                </div>
                            )
                        }
                    </CardContent>
                </Card>
            </div>
        )

    )
}

export default Assesment