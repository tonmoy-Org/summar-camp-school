import Banner from "../Banner/Banner";
import ClassesSection from "../ClassesSection/ClassesSection";
import InstructorSection from "../InstructorSection/InstructorSection";
import Program from "../Program/Program";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ClassesSection></ClassesSection>
            <div className='max-w-screen-xl mx-auto'>
                <InstructorSection></InstructorSection>
                <Program></Program>
            </div>
        </div>
    );
};

export default Home;