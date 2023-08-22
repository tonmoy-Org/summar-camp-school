import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import MyClassCard from "./MyClassCard";
import SectionTitle from "../../../component/SectionTitle";


const MyClass = () => {
    const [classes, setClasses] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`https://summer-camp-client.vercel.app/addClass?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [user])
    console.log('class', classes);
    return (
        <div>
            <SectionTitle heading='My class' ></SectionTitle>
            <div className="grid lg:grid-cols-2 gap-8">
                {
                    classes.map(myClass =>
                        <MyClassCard
                            key={myClass._id}
                            myClass={myClass}
                        ></MyClassCard>)
                }
            </div>
        </div>
    );
};

export default MyClass;