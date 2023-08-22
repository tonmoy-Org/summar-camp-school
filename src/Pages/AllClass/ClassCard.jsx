import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const ClassCard = ({ classes }) => {
  const { _id, name, image, price, instructorName, availableSeats, enrolled } = classes;
  const { user } = useContext(AuthContext);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const handleSelect = (classes) => {
    console.log(classes);
    const selectClass = { classId: _id, name, image, price, instructorName, availableSeats, enrolled, email: user?.email, userName: user?.displayName };
    setButtonDisabled(true); // Disable the button after it's clicked

    fetch('https://summer-camp-client.vercel.app/selectClass', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(selectClass)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        Swal.fire('Class is selected. To see your selected classes, go to the My Selected page.');
      })
      .catch(error => {
        console.error('Error:', error);
        Swal.fire('An error occurred. Please try again later.');
      });
  };

  return (
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
        <div className="card-actions justify-end">
          {user === null ?  <Link to='/login'><button className="btn btn-primary">Selected</button> </Link>:
            <button className="btn btn-primary" onClick={() => handleSelect(classes)} disabled={isButtonDisabled}>
              {isButtonDisabled ? 'Selected' : 'Select'}
            </button>
          }
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
