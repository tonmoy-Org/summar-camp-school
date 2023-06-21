

const CardClass = ({ item }) => {
    const { name, image, price, instructorName, availableSeats, enrolled } = item;
    return (
        <div  data-aos="fade-up">
            {enrolled > 1 &&
                <div className="card w-96 glass">
                    <figure>
                        <img className="" src={image} alt={name} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>Instructor: {instructorName}</p>
                        <p>Price: {price}</p>
                        <p>Available Seats: {availableSeats}</p>
                        <p>Enrolled: {enrolled}</p>
                    </div>
               </div>
            }
        </div>
    );
};

export default CardClass;