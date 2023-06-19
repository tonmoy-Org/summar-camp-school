import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAdmin from "../component/useAdmin";
import { Navigate, useLocation } from "react-router-dom";


const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    if(loading || isAdminLoading){
        return <div className="w-56 mx-auto mt-60"><progress className="progress"></progress></div>
    }
    if(user && isAdmin.admin){
        return children;
    }
    return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default AdminRoute;