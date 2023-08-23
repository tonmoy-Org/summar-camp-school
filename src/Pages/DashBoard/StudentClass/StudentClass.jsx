import SectionTitle from "../../../component/SectionTitle";
import StudentCart from "./StudentCart";
import useSelectedClasses from "../../../hooks/useSelectedClasses";


const StudentClass = () => {
    const [selectClass, refetch] = useSelectedClasses();

    // const handleSSLCommerz = (selectClass) =>{
    //     console.log(selectClass);

    // }
    return (
        <div>
            <SectionTitle subHeading='Selected Class Information' heading='Classes'></SectionTitle>
            {selectClass?.length === 0 ? 
            <span className="text-2xl">Currently you have not select any class</span>
                : <div className="grid lg:grid-cols-3 gap-6 w-11/12 mx-auto">
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