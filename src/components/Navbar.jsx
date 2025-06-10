import React from "react";
import { useNavigate, Link, useLocation } from "react-router";
import { LogOut, Gauge, Book, ClipboardCheck, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeDropdown } from "./ThemeDropdown";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: <Gauge className="size-6" /> },
    { path: "/learn", label: "Learn", icon: <Book className="size-6" /> },
    { path: "/test", label: "Test", icon: <ClipboardCheck className="size-6" /> },
    { path: "/certify", label: "Certify", icon: <ShieldCheck className="size-6" /> },
  ];

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <nav className="w-full bg-background border-border border-b shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 flex justify-between items-center">
        {/* Brand + Nav Links */}
        <div className="flex items-center space-x-6">
          <Link className="text-2xl font-bold" to="/learn">
            EdTech
          </Link>

          {/* Full Nav (Desktop) */}
          <div className="hidden md:flex gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={
                  "text-foreground hover:bg-accent/80 transition-all hover:text-accent-foreground py-2 px-3 rounded-md flex items-center gap-2 text-sm font-medium " +
                  (location.pathname.startsWith(item.path)
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "")
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Icons Only (Mobile) */}
          <div className="flex gap-3 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={
                  "p-2 rounded-md hover:bg-accent text-muted-foreground transition-colors " +
                  (location.pathname.startsWith(item.path)
                    ? "bg-primary text-primary-foreground"
                    : "")
                }
                aria-label={item.label}
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Theme & Logout */}
        <div className="flex items-center gap-4">
          <ThemeDropdown />
          <Button
            variant="outline"
            className="flex gap-2 items-center text-sm"
            onClick={handleLogout}
          >
            <LogOut className="size-4" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
