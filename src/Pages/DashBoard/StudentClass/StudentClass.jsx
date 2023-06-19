import SectionTitle from "../../../component/SectionTitle";
import StudentCart from "./StudentCart";
import useSelectedClasses from "../../../hooks/useSelectedClasses";
import { Link } from "react-router-dom";

const StudentClass = () => {
    const [selectClass, refetch] = useSelectedClasses();

    const handleSSLCommerz = (selectClass) =>{
        console.log(selectClass);

    }
    return (
        <div className="w-9/12 mx-auto lg:h-full">
            <SectionTitle subHeading='Selected Class Information' heading='Classes'></SectionTitle>
            <div className="py-5 justify-end flex gap-8">
                <Link to={`/dashboard/payment`}>
                    <button className="btn btn-sm btn-neutral">Buy Now</button>
                </Link>
               
            </div>
            {selectClass?.length === 0 ? 
            <span className="text-2xl">Currently you have not select any class</span>
                : <div className="grid lg:grid-cols-2 gap-8">
                    {
                        selectClass.map(select =>
                            <StudentCart
                                key={select._id}
                                select={select}
                                refetch={refetch}
                            ></StudentCart>)
                    }
                </div>
            }
        </div>
    );
};

export default StudentClass;