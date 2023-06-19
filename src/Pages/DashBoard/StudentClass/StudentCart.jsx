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
                fetch(`https://summer-camp-school-server-tonmoy-org.vercel.app/selectClass/${id}`, {
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


    const handleSSLCommerz = (select) => {
        console.log(select);
        const data = { ...select, currency: 'BDT' }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                window.location.replace(data.url)
            })

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
                        <Link>
                            <button onClick={() => handleSSLCommerz(select)} className="btn btn-sm btn-neutral">SSLCommerz</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentCart;