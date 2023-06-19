import SectionTitle from "../../../component/SectionTitle";
import useClass from "../../../hooks/useClass";
import CardClass from "./CardClass";

const ClassesSection = () => {
  const [classes] = useClass();

  // Slice the classes array into 6 items
  const slicedClasses = classes.slice(0, 6);

  return (
    <div className="mt-16" >
      <SectionTitle
        subHeading="OUR CLASS"
        heading="Popular Classes"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      ></SectionTitle>
      <div className="grid lg:grid-cols-3 gap-8  mb-28">
        {slicedClasses.map((item) => (
          <CardClass key={item._id} item={item}></CardClass>
        ))}
      </div>
    </div>
  );
};

export default ClassesSection;
