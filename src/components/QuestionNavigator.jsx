import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle, CardHeader } from "./ui/card";
import { useLocation, useParams } from "react-router";

const QuestionNavigator = ({ questionBank, answers, currentQuestion, setCurrentQuestion, navigate }) => {
    const location=useLocation();
    const handleQuestionClick = (questionNumber) => {
        setCurrentQuestion(questionNumber);
    };
    const {categoryId, topicId}=useParams()
    // FIXED: Ensured answeredCount correctly filters for non-empty answers at any index
    const answeredCount = answers.filter(answer => answer !== undefined && answer !== "").length;

    return (
        <Card className="w-60 h-fit">
            <CardHeader>
                <CardTitle><b className="text-lg">Questions</b></CardTitle>
                <CardDescription>
                    {answeredCount} of {questionBank.length} answered
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 ">
                <div className="grid grid-cols-4 gap-2 gap-y-3">
                    {
                        questionBank.map((question, index) => (
                            <Button
                                // FIXED: Corrected variant logic to use index + 1 for answers array access, aligning with 1-indexed question numbers
                                variant={answers[index + 1] ? "default" : (currentQuestion === (index + 1) ? "default" : "outline")}
                                // FIXED: Used index directly for key, as 'question.id' might not be unique or present in all mockdata
                                key={index}
                                size="sm"
                                className="w-8 h-8"
                                // FIXED: Passed index + 1 to handleQuestionClick to match 1-indexed question numbers
                                onClick={() => { handleQuestionClick(index + 1) }}
                            >
                                {/* FIXED: Display checkmark if answer exists, otherwise display 1-indexed question number */}
                                {answers[index + 1] ? <Check /> : (index + 1)}
                            </Button>
                        ))
                    }
                </div>
                <div className="flex justify-center">
                    <Button
                        variant="default"
                        onClick={()=>{
                            location.pathname.startsWith("/test")
                            ?navigate(`/test/${categoryId}`)
                            :navigate("/certify");
                        }}
                    >
                        Back to {location.pathname.startsWith("/test")?"topics":"courses"}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default QuestionNavigator;
