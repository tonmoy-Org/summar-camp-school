import SectionTitle from '../../../component/SectionTitle';
import InstructorSectionCard from './InstructorSectionCard';
import useInstructorLoader from '../../../hooks/useInstructorLoader';

const InstructorSection = () => {
  const [instructors] = useInstructorLoader();
  const slicedInstructors = instructors.slice(0, 6); // Slice the first 6 items
  
  return (
    <div className='mx-auto  py-28'>
      <SectionTitle subHeading='OUR TEACHERS' heading='Popular Instructors ' />
      <div className='grid lg:grid-cols-4 gap-8'>
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
