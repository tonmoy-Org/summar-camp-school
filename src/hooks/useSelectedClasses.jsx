import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useSelectedClasses = () => {
    const { user } = useContext(AuthContext);
    const { data: selectClass = [], refetch } = useQuery(['selectClass'], async () => {
        const res = await fetch(`https://summer-camp-school-server-tonmoy-org.vercel.app/selectClass?email=${user?.email}`); // Replace with the correct URL for fetching user data
        return res.json();
    });

    return [selectClass, refetch];
};

export default useSelectedClasses;