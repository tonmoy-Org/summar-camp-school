import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
const AddClass = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const price = parseInt(data.price); // Convert the price value to an integer
        const availableSeats = parseInt(data.availableSeats); // Convert the availableSeats value to an integer

        const addClass = { ...data, price, availableSeats, status: 'pending', enrolled: 0 }; // Add the price and availableSeats fields to the data object

        console.log(addClass);
        fetch('http://localhost:5000/addClass', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addClass)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    title: 'Successfully Add Class',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })

    }
    return (
        <div>
            <div className="w-full mx-auto border-dashed border-2 border-[#004e96] p-10 my-10">
                <h1 className="text-center text-3xl my-6 font-semibold text-[#004e96]">Add Class</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid lg:grid-cols-2 gap-8'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class name</span>
                            </label>
                            <input type="text"  {...register("name", { required: true })} name="name" placeholder="class name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Image</span>
                            </label>
                            <input type="text"  {...register("image", { required: true })} name="image" placeholder="class Image" className="input input-bordered" />
                            {errors.image && <span className="text-red-600">This field is required</span>}
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 gap-8'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor name </span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} {...register("instructorName", { required: true })} name="instructorName" placeholder="Instructor name" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor email</span>
                            </label>
                            <input type="email" defaultValue={user?.email} {...register("email", { required: true })} name="instructorEmail" placeholder="Instructor email" className="input input-bordered" />
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 gap-8'>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available seats</span>
                            </label>
                            <input type="text"  {...register("availableSeats", { required: true })} name="availableSeats" placeholder="available seats" className="input input-bordered" />
                            {errors.seats && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text"  {...register("price", { required: true })} name="price" placeholder="price" className="input input-bordered" />
                            {errors.price && <span className="text-red-600">This field is required</span>}
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-success text-white" type="submit" value="Add" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddClass;