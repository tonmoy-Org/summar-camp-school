
const InstructorSectionCard = ({instructor}) => {
    const { image, name, email } = instructor;
    return (
        <div  data-aos="fade-up">
            <div className="card w-64 glass">
                <figure><img src={image} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Email: {email}</p>
                </div>
            </div>
        </div>
    );
};

export default InstructorSectionCard;