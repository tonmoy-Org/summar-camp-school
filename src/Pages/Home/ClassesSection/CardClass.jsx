

const CardClass = ({ item }) => {
    const { name, image, price, instructorName, availableSeats, enrolled } = item;
    return (
        <div>
            {enrolled > 1 &&
                <div className="w-6/5 bg-base-100 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-violet-50 duration-300">
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