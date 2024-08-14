import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useClass = () => {
    const [axiosSecure] = useAxios();
    const { data: classes = [], refetch } = useQuery({
        queryKey: ['class'],
        queryFn: async () => {
            const res = await axiosSecure.get('/class');
            return res.data;
        },
    });

    return [classes, refetch];
};

export default useClass;