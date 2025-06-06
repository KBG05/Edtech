import { Flag, LogIn } from "lucide-react";
import React  from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle, CardFooter} from "@/components/ui/card";
import { Label} from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Loader2Icon } from "lucide-react";

const Login=()=>{
    const [showPassword, setShowPassword]=useState(false);
    const [isLoading, setIsLoading]=useState(false)
    const navigate=useNavigate();
    const [formData, setFormData]=useState({username:"", password:""});

    const handleSubmit=async(e)=>{
        e.preventDefault();
        setIsLoading(true);
        
        try{
            if(formData.username==="admin" && formData.password==="admin" ){
                const timeout= setTimeout(()=>{navigate("/Learn");setIsLoading(false)},2000)
                //todo  change navigate to homepage
            }
            else{throw new Error("Invalid input")}
        }
        catch(error){console.log(error)}
        // todo: add mock login verification
        finally{
            // setIsLoading(false)
        }
    }

    const handleChange=(field, value)=>{
        setFormData(prev=>({...prev, [field]:value}))
    };

    return(
        <div className="flex items-center justify-center min-h-screen pb-20 ">
            <Card className="w-full max-w-md ">
                <CardHeader className="space-y-1 text-center ">
                    <CardTitle className="text-2xl " > Welcome Back</CardTitle>
                    <CardDescription>Login to Your Account</CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label className=" ml-0.5">Username</Label>
                            <Input
                                id="username"
                                type="text"
                                placeholder="Enter your username"
                                value={formData.username}
                                onChange={e=>handleChange("username",e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label className="ml-0.5">Password</Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    placeholder="Enter your Password"
                                    type={showPassword?"text":"password"} 
                                    value={formData.password}
                                    
                                    onChange={e=>handleChange("password",e.target.value)}
                                    required
                                    
                                />
                                <Button 
                                    type="button"
                                    variant="ghost"
                                    className=" absolute right-0  top-0 h-full w-10" 
                                    onClick={()=>setShowPassword(!showPassword)}
                                >
                                    {showPassword?<Eye className="h-4 w-4"></Eye>:<EyeOff className="h-4 w-4"></EyeOff>}
                                </Button>
                            </div>
                        </div>
                        <Button variant="" type="submit" className="w-full " disabled={isLoading}>
                            {isLoading?<Loader2Icon className="animate-spin" /> : <><LogIn className="h-4 w-4 mr-2"></LogIn><p>Sign In</p></>}
                        </Button>
                    </form> 
                </CardContent>
            </Card>

        </div>
    )
};

export default Login;