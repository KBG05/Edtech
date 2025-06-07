import React from "react";
import { useState } from "react";
import { Card, CardContent,CardDescription,CardTitle, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";
import { ClipboardCheck } from "lucide-react";

const Assesment=({selectedTopic})=>{
    return(selectedTopic
        ?(
            <div>
                
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