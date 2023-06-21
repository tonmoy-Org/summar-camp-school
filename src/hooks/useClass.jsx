import { useQuery } from "@tanstack/react-query";


const useClass = () => {
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch(`https://summer-camp-client-tonmoy-org.vercel.app/class`); // Replace with the correct URL for fetching user data
        return res.json();
    });

    return [classes, refetch];
};

export default useClass;