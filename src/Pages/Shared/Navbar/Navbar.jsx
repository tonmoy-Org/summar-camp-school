import { Link } from "react-router-dom";
import logo from '../../../assets/logo/Logo-Musicine-1.png'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import DarkModeToggle from 'react-dark-mode-toggle';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    //  logOut
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black h-0 text-white px-12">
            <div className="flex gap-2 items-center">
                <Link to='/'><img className="w-52 rounded-md" src={logo} alt="" /></Link>
            </div>
            <div className="navbar hidden lg:flex justify-center">
                <ul className="px-4 gap-10 font-semibold">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/instructors'>Instructors</Link></li>
                    <li><Link to='/allClass'>Classes</Link></li>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                </ul>
            </div>

            <div className="flex-none mx-auto ms-36">

                {user &&
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <div>
                                    <img src={user.photoURL}
                                    />

                                </div>
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content  mt-3 p-1 lg:text-black text-white font-semibold shadow bg-[#004e96]  lg:bg-base-100 rounded-box">
                            <li>
                                <p className="justify-between">
                                    {user.displayName} <br />
                                    {user.email}
                                    <span className="badge">New</span>
                                </p>
                            </li>
                            <li><Link to='/'>Home</Link></li>
                            <li><div className="form-control">
                                <label className="label cursor-pointer">
                                    {/* <span className="label-text">Remember me</span> */}
                                    <input type="checkbox" className="toggle"  />
                                </label>
                            </div></li>
                            
                            <li><Link to='/instructors'>Instructors</Link></li>
                            <li><Link to='/allClass'>Classes</Link></li>
                            <li><Link to='/dashboard'>Dashboard</Link></li>
                            <li><Link onClick={handleLogOut}>Logout</Link></li>
                        </ul>
                    </div>
                }
            </div>

            {
                user ?
                    <></>
                    : <Link className="btn btn-xs font-bold" to='/login'>LogIn</Link>
            }

        </div>
    );
};

export default Navbar;