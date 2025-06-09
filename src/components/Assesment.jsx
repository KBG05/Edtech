import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Card, CardContent, CardDescription, CardTitle, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CircleX, ClipboardCheck, RotateCcw, Book, ArrowRight } from "lucide-react";
import QuestionNavigator from "./QuestionNavigator";
import { Progress } from "./ui/progress";
import { Textarea } from "./ui/textarea";
import AudioRecorder from "@/components/AudioRecorder";

const Assesment = ({ selectedTopic, questionBank, answerBank, setSelectedTopic, selectedCategory }) => {
    const navigate = useNavigate();
    const location=useLocation();
    const [answers, setAnswers] = useState([""]);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [completed, setCompleted] = useState(0);
    
    const effectiveQuestionBank = questionBank || [];
    const effectiveAnswerBank = answerBank || [];
    
    const handleAnswerChange = (value) => {
        const newAnswers = [...answers];
        while (newAnswers.length <= currentQuestion) {
            newAnswers.push(undefined);
        }
        newAnswers[currentQuestion] = value;
        setAnswers(newAnswers);
    };

    const handleCompletion = () => {
        let correctAnswersCount = 0;
        for (let i = 0; i < effectiveAnswerBank.length; i++) {
            const userAnswer = answers[i + 1];
            const correctAnswer = effectiveAnswerBank[i];
            const normalizedUserAnswer = userAnswer ? String(userAnswer).toLowerCase().trim() : '';
            const normalizedCorrectAnswer = correctAnswer ? String(correctAnswer).toLowerCase().trim() : '';
            if (normalizedUserAnswer === normalizedCorrectAnswer) {
                correctAnswersCount++;
            }
        }
        return correctAnswersCount;
    };

    const handleRetakeTest = () => {
        setAnswers([""]);
        setCompleted(0);
        setCurrentQuestion(1);
    };

    const handleLearnThisTopic = () => {
        if (selectedTopic && selectedTopic.id && selectedCategory.id) {
            navigate(`/learn/${selectedCategory.id}`);
        }else if(selectedCategory && location.pathname.startsWith("/certify")){
            navigate(`/learn/${selectedCategory.id}`)  
        } else {
            console.warn("Cannot navigate to learn page: selectedTopic or its ID/categoryId is missing.");
            navigate(`/learn`);
        }
        
    };

    const handleNextTest = () => {
        setCompleted(0);
        if (setSelectedTopic) {
            setSelectedTopic(null);
        }
        setAnswers([""]);
        setCurrentQuestion(1);
        navigate("/test");
    };

    const isTopicSelected = ()=>{
        if(location.pathname.startsWith("/test") && selectedTopic!==null) {return true;}
        else if(location.pathname.startsWith("/certify") && selectedCategory!==null){return true;}
        else return false
    }

    return (
        completed ? (
            <div className="flex max-w-[80%] mx-auto items-center justify-center min-h-[50vh]">
                <Card className="flex-1 text-center">
                    <CardHeader className="mx-auto">
                        <CardTitle>
                            <div className="space-y-4">
                                <div className={`mx-auto w-28 h-28 rounded-full flex items-center justify-center mb-4 ${handleCompletion() / effectiveQuestionBank.length < 0.5 ? "bg-red-100" : "bg-green-100"}`}>
                                    {handleCompletion() / effectiveQuestionBank.length < 0.5
                                        ? <CircleX className="h-14 w-14 text-red-700" />
                                        : <ClipboardCheck className="h-14 w-14 text-green-700" />
                                    }
                                </div>
                                <p className={`tracking-tighter flex items-center justify-center text-3xl font-extrabold ${effectiveQuestionBank.length > 0 && handleCompletion() / effectiveQuestionBank.length < 0.5 ? "text-red-700" : "text-green-700"}`}>
                                    {effectiveQuestionBank.length > 0 && handleCompletion() / effectiveQuestionBank.length < 0.5 ? "Test Failed" : "Test Passed"}
                                </p>
                            </div>
                            <p className="mt-7 flex items-center justify-center text-5xl font-bold">{effectiveQuestionBank.length > 0 ? Math.round((handleCompletion() / effectiveQuestionBank.length) * 100) : 0}%</p>
                        </CardTitle>
                        <CardDescription>
                            <p className="text-[16px]">You Answered {handleCompletion()} of {effectiveQuestionBank.length} Questions Correctly</p>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap justify-center gap-4">
                        <Button variant="outline" className="font-bold h-[50px]" onClick={handleRetakeTest}>
                            <RotateCcw className="size-6 mr-2" />
                            Retake Test
                        </Button>
                        <Button className="font-bold h-[49px]" onClick={handleLearnThisTopic}>
                            <Book className="size-6 mr-2" />
                            Learn This Topic
                        </Button>
                        <Button className="h-[50px] font-bold" onClick={handleNextTest}>
                            <ArrowRight className="size-6 mr-2" />
                            Next Test
                        </Button>
                    </CardContent>
                </Card>
            </div>
        ) : isTopicSelected() ? (
            <div className="flex flex-col md:flex-row gap-6">
                <QuestionNavigator
                    selectedTopic={selectedTopic}
                    questionBank={effectiveQuestionBank}
                    answers={answers}
                    currentQuestion={currentQuestion}
                    setCurrentQuestion={setCurrentQuestion}
                    navigate={navigate}
                />
                <div className="flex-1 space-y-5">
                    <b className="text-4xl">{selectedTopic?.name ||selectedCategory?.name}</b>
                    <Card>
                        <div className="w-[95%] m-auto py-4">
                            <p className="text-sm pb-4">Question {currentQuestion} of {effectiveQuestionBank.length} </p>
                            <Progress
                                value={(currentQuestion / effectiveQuestionBank.length) * 100}
                            />
                        </div>
                    </Card>
                    <Card>
                        <CardHeader className="text-xl font-bold">
                            Q{currentQuestion}. {effectiveQuestionBank[currentQuestion - 1]?.question || "Loading question..."}
                        </CardHeader>
                        <CardContent className="space-y-10">
                            <Textarea className="h-36" placeholder="Input your answer"
                                value={answers[currentQuestion] || ""}
                                onChange={e => { handleAnswerChange(e.target.value) }}
                            />
                            <AudioRecorder
                                handleAnswerChange={handleAnswerChange}
                            />
                            <div className="flex justify-between">
                                <Button
                                    variant="outline"
                                    disabled={currentQuestion === 1}
                                    onClick={() => { setCurrentQuestion(currentQuestion - 1); }}
                                >
                                    Previous
                                </Button>
                                <Button
                                    variant="default"
                                    onClick={() => {
                                        currentQuestion < effectiveQuestionBank.length
                                            ? setCurrentQuestion(currentQuestion + 1)
                                            : setCompleted(1);
                                    }}
                                    disabled={!answers[currentQuestion]}
                                >
                                    {currentQuestion === effectiveQuestionBank.length ? "Submit" : "Next Question"}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        ) : (
            <div className="flex-1">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-3xl flex-1">WELCOME</CardTitle>
                    </CardHeader>
                    <CardContent className="min-w-auto rounded-2xl pl-7 pr-7 pb-7 pt-0 ">
                        <div className="text-center ">
                            <ClipboardCheck className="w-16 h-16 mx-auto mb-4 opacity-50"></ClipboardCheck>
                            <p className="text-muted-foreground text-xl">Select a Test to Attempt</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    );
};

export default Assesment;
