import React from "react";
import { useState } from "react";
import { Card, CardContent,CardDescription,CardTitle, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowBigLeft, ArrowRight, Book, Car, CircleX, RotateCcw } from "lucide-react";
import { ClipboardCheck } from "lucide-react";
import QuestionNavigator from "./QuestionNavigator";
import { Progress } from "./ui/progress";
import { Textarea } from "./ui/textarea";
import AudioRecorder from "@/components/AudioRecorder"
import { Navigate, useNavigate } from "react-router";

const Assesment=({selectedTopic, testData, selectedCategory, setSelectedTopic})=>{
    const navigate=useNavigate();
    const[answers, setAnswers]=useState([""]);
    const[currentQuestion, setCurrentQuestion]=useState(1);
    const[completed, setCompleted]=useState(0)
    // console.log(((answers.length-1)/testData[selectedCategory.id][selectedTopic.id].length)*100)
    const questionBank=(selectedCategory && selectedTopic && testData && testData[selectedCategory.id] && testData[selectedCategory.id][selectedTopic.id])
        ? testData[selectedCategory.id][selectedTopic.id]
        : [];

    // console.log(questionBank)
    const answerBank=questionBank.map((question)=>{
        if (question.options && typeof question.correct !== 'undefined' && question.options[question.correct]){
            return question.options[question.correct]
        }
    });
    const handleAnswerChange=(e)=>{
        const newAnswers=[...answers];
        while (newAnswers.length <= currentQuestion) {
            newAnswers.push(undefined);
        }
        newAnswers[currentQuestion]=e;
        setAnswers(newAnswers);

    };
     const handleCompletion=()=>{
        let correctAnswersCount=0;
        for(let i=0; i<answerBank.length;i++){
            const userAnswer = answers[i + 1]; 
            const correctAnswer = answerBank[i];

            const normalizedUserAnswer = userAnswer ? String(userAnswer).toLowerCase().trim() : '';
            const normalizedCorrectAnswer = correctAnswer ? String(correctAnswer).toLowerCase().trim() : '';

            if (normalizedUserAnswer === normalizedCorrectAnswer) {
                correctAnswersCount++;
            }
        }
        return correctAnswersCount;
        
    };
    const handleReatakeTest=()=>{
        setAnswers([""]);
        setCompleted(0);
        setCurrentQuestion(1);
        
    };
    
    const handleLearnThisTopic=()=>{
        navigate("/learn")
    }

    const handleNextTest=(e)=>{
        setCompleted(0)
        setSelectedTopic(null)
        setAnswers([""])
        setCurrentQuestion(1)
        
    }
    return(
        completed?(
            <div className="flex max-w-[80%] mx-auto  align-middle">
                <Card className="flex-1 ">
                    <CardHeader className=" mx-auto">
                        <CardTitle>
                            <div className="space-y-4">
                                <div className={"mx-auto w-28 h-28 bg-red-100 rounded-full flex items-center justify-center mb-4 ".concat(!handleCompletion()/questionBank.length<1?"bg-green-100":"")}>
                                    {handleCompletion()/questionBank.length<0.5
                                    ?<CircleX className="h-14 w-14 text-red-700 "/>
                                    :<ClipboardCheck className="h-14 w-14 text-green-700"/>
                                    }

                                </div>

                                <p className={"tracking-tighter flex items-center justify-center text-3xl font-extrabold ".concat(handleCompletion()/questionBank.length<0.5?"text-red-700":"text-green-700")}>
                                    {handleCompletion()/questionBank.length<0.5?<>Test Failed</>:"Test Passed"}
                                </p>
                            </div>
                            <p className="mt-7 flex items-center justify-center text-5xl font-bold">{handleCompletion()/questionBank.length*100}%</p>
                        </CardTitle>
                        <CardDescription>
                            <p className="text-[16px]">You Answered {handleCompletion()} of {questionBank.length} Questions Correctly</p>
                        </CardDescription>           
                    </CardHeader>

                    <CardContent className="flex justify-center gap-4">
                        <Button variant="outline" className="font-bold h-[50px]" onClick={()=>{handleReatakeTest()}}>
                            <RotateCcw className="size-6"/>
                            Retake Test
                        </Button>
                        <Button className="font-bold h-[49px]" onClick={()=>{handleLearnThisTopic()}}>
                            <Book className="size-6"/>
                            Learn This Topic
                        </Button>
                        <Button variant="" className=" h-[50px] font-bold" onClick={()=>{handleNextTest("/test")}}>
                            <ArrowRight className="size-6"/>
                            Next Test
                        </Button>
                    </CardContent>
                </Card>

            </div>
        ):
        selectedTopic
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
                        <CardContent className="space-y-10">
                            <Textarea className="h-36 " placeholder="input your answer"
                                value={answers[currentQuestion]||""}
                                onChange={e=>{handleAnswerChange(e.target.value)}}

                            />
                            <AudioRecorder
                                handleAnswerChange={handleAnswerChange}
                            />
                            <div className="flex justify-between">
                                <Button 
                                    variant="outline"
                                    disabled={currentQuestion===1}
                                    onClick={()=>{setCurrentQuestion(currentQuestion-1);}}
                                >
                                    Previous
                                </Button>
                                <Button 
                                    variant="default"
                                    onClick={()=>{currentQuestion<questionBank.length-1?setCurrentQuestion(currentQuestion=>currentQuestion+1):setCompleted(1)}}
                                    disabled={answers[currentQuestion] ?false:true}
                                >
                                    {currentQuestion==questionBank.length?"Submit":"Next Question"}
                                </Button>

                            </div>

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