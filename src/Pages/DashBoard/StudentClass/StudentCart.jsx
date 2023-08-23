import { Link } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";

const StudentCart = ({ select, refetch }) => {
    const { _id, name, image, price, availableSeats } = select;

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
                fetch(`https://summer-camp-client.vercel.app/selectClass/${id}`, {
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
            <div className="card h-52 card-side bg-base-100 shadow-xl">
                <figure><img className="h-full w-52" src={image} /></figure>
                <div className="card-body">
                    <h2 className="text-[16px] font-bold">{name}</h2>
                    <p>Price: {price}</p>
                    <p>Available Seats: {availableSeats}</p>
                    <div className="flex justify-between gap-4 items-center">
                        <button onClick={() => handleDeleteClass(_id)} className="btn btn-sm btn-neutral">Delete</button>
                        <Link to={`/dashboard/payment`}>
                            <button className="btn btn-sm btn-error text-white">Pay</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentCart;