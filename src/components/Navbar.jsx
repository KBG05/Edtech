import React from "react";
import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router";
import { LogOut } from "lucide-react";
import { Button } from "./ui/button";

const Navbar=()=>{
    const location=useLocation();
    const navigate=useNavigate();

    const navItems=[
        {path:"/dashboard", label:"Dashboard"},
        {path:"/learn", label:"Learn"},
        {path:"/test", label:"Test"},
        {path:"/certify", label:"Certify"}
    ]

    const handleLogout=()=>{
        navigate("/login");
    }

    return(
        <nav className="dark:bg-background  shadow-lg border-b border-theme-border  ">
            <div className=" w-full h-16  max-w-7xl mx-auto lg:px-6 sm:px-10 ">
                <div className=" flex justify-between items-center h-16">
                    <div className="flex items-center space-x-8">
                        <Link className="text-3xl font-bold pb-2" to="/learn">EdTech</Link>
                        <div className=" flex  gap-2 ">
                            {navItems.map((item)=>(
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className="hover:bg-accent hover:text-accent-foreground text-accent-foreground dark:hover:bg-accent/70  py-2 px-2.5 text-md rounded-sm"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center space-x-8"> 
                        <Button variant="outline" className="flex justify-between" onClick={()=>{handleLogout()}}><LogOut/><>Logout</></Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar