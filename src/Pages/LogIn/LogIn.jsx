import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogIn from "../Shared/SocialLogIn/SocialLogIn";


const LogIn = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";


    const onSubmit = data => {
        console.log(data);
        if (data.password.length < 6) {
            setError('Password is less than 6 characters');
            return;
        }
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
                console.error(error.message);
            })
    }
    return (
        <div className="hero min-h-[100vh] bg-base-200 pt-16">
            <div className="hero-content flex-col lg:w-6/12 p-0 w-10/12">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold">Login now</h1>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-10/12 lg:w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="form-control w-10/12 lg:w-full">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                    <small className='text-blue-600' onClick={() => setShow(!show)}>
                                        <>
                                            {
                                                show ? <span>Hide</span> : <span>Show</span>
                                            }
                                        </>
                                    </small>
                                </label>
                                <input type={show ? "text" : "password"}  {...register("password", { required: true, minLength: 6, maxLength: 20 })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password && <span className="text-red-600">This field is required</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control w-10/12 lg:w-full mt-6">
                                <input className="btn btn-success text-white" type="submit" value="SignUp" />
                            </div>
                        </form>
                        <br />
                         <div>
                            <SocialLogIn></SocialLogIn>
                         </div>
                        <div>
                            <p>New to Musicine ? <Link className="text-primary" to="/signUp">Sign in</Link></p>
                            <p className="text-red-600 py-3">{error}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;