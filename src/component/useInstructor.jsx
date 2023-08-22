import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useInstructor = () => {
    const { user, loading } = useContext(AuthContext);
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/instructor/${user?.email}`); // Replace with the correct URL for fetching user data
            return res.json();
        }
    })
    return [isInstructor, isInstructorLoading]
}
export default useInstructor;