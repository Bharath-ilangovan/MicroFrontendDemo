import { useNavigate, NavigateOptions } from "react-router-dom";

const useCustomNavigate = () => {
    const navigate = useNavigate();

    const customNavigate = (path: string, options?: NavigateOptions, state?: object) => {
        // Add custom logic here, e.g., logging or condition checks
        console.log(`Navigating to: ${path}`);
        // Example: Guarded navigation
        if (path === "/protected" && !localStorage.getItem("authToken")) {
            alert("You must be logged in to access this page.");
            return;
        }
        // Perform the navigation
        navigate(path, { ...options, state });
    };

    return customNavigate;
};

export default useCustomNavigate;
