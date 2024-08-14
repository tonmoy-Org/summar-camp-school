import SectionTitle from "../../component/SectionTitle/SectionTitle";
import useInstructorLoader from "../../hooks/useInstructorLoader";
import InstructorCard from "./InstructorCard";


const Instructors = () => {
    const [instructors] = useInstructorLoader()
    return (
        <div className='max-w-screen-lg mx-auto lg:py-16'>
                <SectionTitle subHeading='OUR TEACHERS' heading='Meet Our Instructor'></SectionTitle>
                <div className="grid lg:grid-cols-3 gap-5 mx-auto">
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