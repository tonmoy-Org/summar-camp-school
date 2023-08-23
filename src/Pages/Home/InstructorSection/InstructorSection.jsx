import SectionTitle from '../../../component/SectionTitle';
import InstructorSectionCard from './InstructorSectionCard';
import useInstructorLoader from '../../../hooks/useInstructorLoader';

const InstructorSection = () => {
  const [instructors] = useInstructorLoader();
  const slicedInstructors = instructors.slice(0, 6); // Slice the first 6 items
  
  return (
    <div className='lg:mx-1 mx-6 py-28'>
      <SectionTitle subHeading='OUR TEACHERS' heading='Popular Instructors ' />
      <div className='grid lg:grid-cols-4 gap-5'>
        {slicedInstructors.map(instructor => (
          <InstructorSectionCard
            key={instructor._id}
            instructor={instructor}
          />
        ))}
      </div>
    </div>
  );
};

export default InstructorSection;
