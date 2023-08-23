import SectionTitle from "../../component/SectionTitle";
import useInstructorLoader from "../../hooks/useInstructorLoader";
import InstructorCard from "./InstructorCard";


const Instructors = () => {
    const [instructors] = useInstructorLoader()
    return (
        <div className='max-w-screen-xl mx-auto py-28'>
                <SectionTitle subHeading='OUR TEACHERS' heading='Meet Our Instructor'></SectionTitle>
                <div className="lg:w-11/12 grid lg:grid-cols-3 gap-8 mx-auto">
                    {
                        instructors.map(instructor =>
                            <InstructorCard
                                key={instructor._id}
                                instructor={instructor}
                            ></InstructorCard>)
                    }
                </div>
        </div>
    );
};

export default Instructors;