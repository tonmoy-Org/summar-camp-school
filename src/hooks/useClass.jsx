import { useQuery } from "@tanstack/react-query";


const useClass = () => {
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch(`http://localhost:5000/class`); // Replace with the correct URL for fetching user data
        return res.json();
    });

    return [classes, refetch];
};

export default useClass;