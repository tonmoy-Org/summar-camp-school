import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAdmin = () => {
    const { user, loading } = useContext(AuthContext);
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`); // Replace with the correct URL for fetching user data
            return res.json();
        }
    })
    return [isAdmin, isAdminLoading]
}
export default useAdmin;