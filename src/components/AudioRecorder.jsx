import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, Mic2, MicOff } from 'lucide-react';
import { SarvamAIClient } from 'sarvamai';

const API_KEY="818a5599-7bcc-47aa-9c6a-be51da266dba"

const AudioRecorder = ({handleAnswerChange}) => {
    const [isRecording, setIsRecording] = useState(false);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);
    const[isLoading, setIsLoading]=useState(0)
    const sarvamClient=new SarvamAIClient({
        apiSubscriptionKey:API_KEY,
    });
    const startRecording = async () => {
        try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorderRef.current = new MediaRecorder(stream);
        audioChunksRef.current = []; // Initialize or clear for a new recording

        mediaRecorderRef.current.ondataavailable = (event) => {
            audioChunksRef.current.push(event.data);
        };

        mediaRecorderRef.current.onstop = async() => {
            setIsLoading(1)
            const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
            const audioFile = new File([audioBlob], 'recorded.wav', {type:'audio/wav'})
            try{
                const response= await sarvamClient.speechToText.transcribe(audioFile,{
                    model:"saarika:flash",
                    language_code:"en-IN"
                })
                handleAnswerChange(response.transcript);
            }catch(error){
                console.error("error with sarvam api", error)
                setTranscript("record again")
            }finally{
                setIsLoading(0)
                audioChunksRef.current=[];
                if(mediaRecorderRef.current && mediaRecorderRef.current.stream){
                    mediaRecorderRef.current.stream.getTracks().forEach(track=>track.stop())
                }
                
            }

        };

        mediaRecorderRef.current.start();
        setIsRecording(true);
        } catch (err) {
        console.error('Error accessing microphone:', err);
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
        mediaRecorderRef.current.stop();
        setIsRecording(false);
        
        }
    };

    return (
        <Button
        onClick={()=>{isRecording ? stopRecording() : startRecording();}}
        variant="secondary"
        className={isRecording ? 'bg-red-500 hover:bg-red-600 animate-pulse' : 'flex align-middle '}
        >
        {isRecording?<MicOff/>:<Mic />}  
        <p>{isRecording ? 'Stop Recording' : 'Voice Input'}</p>
        </Button>
    );
};

export default AudioRecorder;