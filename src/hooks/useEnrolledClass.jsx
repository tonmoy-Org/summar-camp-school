import { useQuery } from "@tanstack/react-query";


const useEnrolledClass = () => {
    const { data: enrolledClass = [], refetch } = useQuery(['enrolledClass'], async () => {
        const res = await fetch(`https://summer-camp-client.vercel.app/enrolledClass/sort`); // Replace with the correct URL for fetching user data
        return res.json();
    });
    return [enrolledClass, refetch];

};

export default useEnrolledClass;