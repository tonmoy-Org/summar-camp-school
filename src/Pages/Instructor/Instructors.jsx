import SectionTitle from "../../component/SectionTitle";
import InstructorCard from "./instructorCard";
import useInstructorLoader from "../../hooks/useInstructorLoader";


const Instructors = () => {
    const [instructors] = useInstructorLoader()
    return (
        <div className='max-w-screen-xl mx-auto py-28'>
                <SectionTitle subHeading='OUR TEACHERS' heading='Meet Our Instructor'></SectionTitle>
                <div className="grid lg:grid-cols-4 gap-8">
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