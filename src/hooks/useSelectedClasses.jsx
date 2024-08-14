import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";


const useSelectedClasses = () => {
    const [axiosSecure] = useAxios();
    const { user } = useAuth();
    const { data: selectClass = [], refetch } = useQuery({
        queryKey: ['selectClass'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/selectClass?email=${user?.email}`);
            return res.data;
        },
    });

    return [selectClass, refetch];
};

export default useSelectedClasses;