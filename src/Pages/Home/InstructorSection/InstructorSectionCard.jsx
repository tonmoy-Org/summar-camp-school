
const InstructorSectionCard = ({ instructor }) => {
    const { image, name} = instructor;
    return (
        <div>
            <div className="w-6/5 h-[410px] bg-base-100 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#F4F4EC] duration-300">
                <figure><img className="h-[320px] w-full" src={image} /></figure>
                <div className="p-2 pt-4 card-body text-center">
                    <h2 className="text-xl font-bold">
                        {name}
                    </h2>
                    <p>Teacher</p>
                </div>
            </div>
        </div>
    );
};

export default InstructorSectionCard;