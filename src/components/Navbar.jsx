import React from "react";
import { useNavigate, Link, useLocation } from "react-router";
import { LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeDropdown } from "./ThemeDropdown";
import { Gauge, Book, ClipboardCheck, ShieldCheck} from "lucide-react";


const Navbar=()=>{
    const location=useLocation();
    const navigate=useNavigate();

    const navItems=[
        {path:"/dashboard", label:"Dashboard", icon:<Gauge className="size-7 stroke-1"/>},
        {path:"/learn", label:"Learn", icon:<Book className="size-7 stroke-1"/>},
        {path:"/test", label:"Test", icon:<ClipboardCheck className="size-7 stroke-1"/>},
        {path:"/certify", label:"Certify",icon:<ShieldCheck className="size-7 stroke-1"/>}
    ]

    const handleLogout=()=>{
        navigate("/login");
    }

    return(
        <nav className="shadow-lg border-b bg-background">
            <div className=" w-full h-16  max-w-7xl mx-auto lg:px-6 sm:px-10 ">
                <div className=" flex justify-between items-center h-16">
                    <div className="flex items-center space-x-8">
                        <Link className="text-3xl font-bold " to="/learn">EdTech</Link>
                        <div className=" flex  gap-2 ">
                            {navItems.map((item)=>(
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={"text-foreground hover:bg-accent/80 transition-all hover:text-accent-foreground py-2 px-2.5 text-[15px] rounded-md flex gap-1 items-center "
                                        .concat(location.pathname.startsWith(item.path)?" bg-primary text-primary-foreground hover:bg-primary/100 hover:text-primary-foreground/100" :"")
                                    }
                                >
                                    {item.icon}
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center space-x-8">
                        <ThemeDropdown/>
                        <Button variant="outline" className="flex justify-between" onClick={()=>{handleLogout()}}><LogOut/><>Logout</></Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar