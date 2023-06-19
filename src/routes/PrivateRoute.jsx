import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user, loading } = useContext(AuthContext);
    const location = useLocation(); 

    if(loading){
        return <div className='flex justify-center my-52'><progress className="progress progress-success w-56"></progress></div>
    }
    if(user?.email){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;