import React from "react";
import { useState,useMemo } from "react";
import { Card, CardContent,CardDescription,CardTitle, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import mockdata from "@/mockdata/data"
import ReactPlayer from "react-player";
import { Book } from "lucide-react";
import CategorySelection from "@/components/CategorySelection";
import MenuBar from "@/components/MenuBar";
import { useLocation } from "react-router";

const Certify=()=>{
    const[selectedCategory, setSelectedCategory]=useState(null)
}