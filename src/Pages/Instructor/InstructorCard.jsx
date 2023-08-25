

const InstructorCard = ({ instructor }) => {
    const { image, name, email } = instructor;

    return (
        <div className="lg:w-96 w-80 mx-auto bg-base-100 shadow-xl">
            <figure><img className="w-full" src={image} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                </h2>
                <p>Contact: <span className="font-semibold">{email}</span></p>
            </div>
        </div>
    );
};

export default InstructorCard;