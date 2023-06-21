import { Link } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";

const StudentCart = ({ select, refetch }) => {
    const { _id, name, image, price, instructorName, availableSeats } = select;

    const handleDeleteClass = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selectClass/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            );
                            refetch();
                        }
                    });
            }
        });
    }

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Instructor: {instructorName}</p>
                    <p>Price: {price}</p>
                    <p>Available Seats: {availableSeats}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDeleteClass(_id)} className="btn btn-sm btn-neutral">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentCart;