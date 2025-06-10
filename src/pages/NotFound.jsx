import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate=useNavigate()
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center text-foreground bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl  mb-4">Oops! Page not found</p>
        <a onClick={()=>{navigate("/dashboard")}} className="text-blue-500 hover:text-blue-700 underline hover:cursor-auto">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
