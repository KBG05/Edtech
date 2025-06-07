import { Button } from "./ui/button";
import { ArrowLeft, Check } from "lucide-react";
import { Card, CardContent, CardDescription,CardTitle, CardHeader } from "./ui/card";
import { useState } from "react";


const QuestionNavigator=({questionData, selectedTopic, selectedCategory, answers, currentQuestion, setCurrentQuestion})=>{

    const questionBank=questionData[selectedCategory.id][selectedTopic.id];
    const handleQuestionClick=(id)=>{
        setCurrentQuestion(id)
        // const newanswer=[...answers];
        // newanswer[id]=id;
        // setAnswers(newanswer)
    }
    return(
        <Card className="w-60 h-fit">
            <CardHeader>
                <CardTitle><b className="text-lg">Questions</b></CardTitle>
                <CardDescription>
                    {answers.length} of {questionBank.length} answered
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-4 gap-2 gap-y-3">
                    {
                        questionBank.map((question)=>(
                            <Button
                                variant={answers[question.id]?"default":currentQuestion===question.id?"default":"outline"}
                                key={question.id}
                                size="sm"
                                className={"w-8 h-8"}
                                onClick={()=>{handleQuestionClick(question.id)}}
                            >
                                {answers[question.id]?<Check/>:question.id}
                            </Button>
                        ))
                    }
                </div>
            </CardContent>
        </Card>
    )
}
export default QuestionNavigator