import InstructorSectionCard from './InstructorSectionCard';
import useInstructorLoader from '../../../hooks/useInstructorLoader';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';

const InstructorSection = () => {
  const [instructors] = useInstructorLoader();
  const slicedInstructors = instructors.slice(0, 6);
  
  return (
    <div className=''>
      <SectionTitle subHeading='OUR TEACHERS' heading='Popular Instructors ' />
      <div className='grid lg:grid-cols-3 gap-5'>
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
