import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";


const useEnrolledClass = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxios();
    const { data: enrolledClass = [], refetch } = useQuery({
        queryKey: ['enrolledClass'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/enrolledClass?email=${user?.email}`);
            return res.data;
        },
    });
    return [enrolledClass, refetch];

};

export default useEnrolledClass;