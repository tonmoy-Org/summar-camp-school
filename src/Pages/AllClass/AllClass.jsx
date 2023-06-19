import SectionTitle from "../../component/SectionTitle";
import useClass from "../../hooks/useClass";
import ClassCard from "./ClassCard";


const AllClass = () => {
    const [allClasses] = useClass();
    return (
        <div className="max-w-screen-xl mx-auto py-28">
            <SectionTitle subHeading='OUR CLASS' heading='Our Music Class'></SectionTitle>
            <div className="grid lg:grid-cols-3 gap-8">
                {
                    allClasses.map(classes =>
                        <ClassCard
                            key={classes._id}
                            classes={classes}
                        ></ClassCard>)
                }
            </div>
        </div>
    );
};

export default AllClass;