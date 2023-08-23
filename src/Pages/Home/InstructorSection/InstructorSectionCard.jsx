
const InstructorSectionCard = ({ instructor }) => {
    const { image, name, email } = instructor;
    return (
        <div>
            <div className="w-6/5 h-[410px] bg-base-100 shadow-xl">
                <figure><img className="h-[320px] w-full" src={image} /></figure>
                <div className="p-1 pt-4">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <p>Contact: <span className="font-semibold">{email}</span></p>
                </div>
            </div>
        </div>
    );
};

export default InstructorSectionCard;