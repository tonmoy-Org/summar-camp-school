import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useInstructor = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxios();
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
                return res.data.instructor;
            } catch (error) {
                console.error('Error while fetching instructor:', error);
                throw error;
            }
        }
    });
    return [isInstructor, isInstructorLoading]
}
export default useInstructor;