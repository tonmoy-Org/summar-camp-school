import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useInstructor from "../component/useInstructor";


const InstructorRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();
    if(loading || isInstructorLoading){
        return <div className="w-56 mx-auto mt-60"><progress className="progress"></progress></div>
    }
    if(user && isInstructor.instructor){
        return children;
    }
    return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default InstructorRoute;