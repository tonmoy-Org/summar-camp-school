

const InstructorCard = ({ instructor }) => {
    const { image, name, email } = instructor;

    return (
        <div>
            <div className="card h-[450px] glass">
                <figure><img className="h-[300px] w-[400px]" src={image} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Email: {email}</p>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;