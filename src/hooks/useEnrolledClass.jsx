import { useQuery } from "@tanstack/react-query";


const useEnrolledClass = () => {
    const { data: enrolledClass = [], refetch } = useQuery(['enrolledClass'], async () => {
        const res = await fetch(`http://localhost:5000/enrolledClass/sort`); // Replace with the correct URL for fetching user data
        return res.json();
    });
    return [enrolledClass, refetch];

};

export default useEnrolledClass;