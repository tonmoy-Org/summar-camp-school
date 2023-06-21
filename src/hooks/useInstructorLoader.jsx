import { useQuery } from "@tanstack/react-query";


const useInstructorLoader = () => {
    const { data: instructors = [], refetch } = useQuery(['instructors'], async () => {
        const res = await fetch(`https://summer-camp-client-tonmoy-org.vercel.app/instructors`); // Replace with the correct URL for fetching user data
        return res.json();
    });

    return [instructors, refetch];
};

export default useInstructorLoader;