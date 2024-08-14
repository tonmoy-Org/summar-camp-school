import { Link } from "react-router-dom";
import logo from '../../../assets/logo/music.png';
import useSelectedClasses from "../../../hooks/useSelectedClasses";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [selectClass, refetch] = useSelectedClasses();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message);
            })
    }

    const total = selectClass.map(data => data.price);
    const subTotal = total.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    refetch();

    return (
        <div className="navbar fixed z-10 bg-[#F4F4EC] h-16 lg:px-36 px-3 py-2">
            <div className="container mx-auto flex items-center justify-between h-full">
                <div className="flex gap-2 items-center">
                    <Link to="/" className="btn btn-ghost normal-case text-xl flex items-center">
                        <img className="w-10" src={logo} alt="Musicine" />
                        <p className="ml-2">Musicine</p>
                    </Link>
                </div>
                <div className="hidden lg:flex justify-center items-center">
                    <ul className="flex gap-10 font-semibold">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/instructors'>Instructors</Link></li>
                        <li><Link to='/allClass'>Classes</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>

                <div className="flex items-center gap-4">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="badge badge-sm indicator-item">{selectClass?.length}</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 p-2 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">{selectClass?.length} Items</span>
                                <span className="text-info">Subtotal: ${subTotal}</span>
                                <div className="card-actions">
                                    <Link to='/dashboard/studentClass'>
                                        <button className="btn btn-sm btn-primary btn-block">View cart</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="drawer drawer-end">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            <label htmlFor="my-drawer-4" className="drawer-button">
                                {user ?
                                    <div className="avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user?.photoURL} alt="User Avatar" />
                                        </div>
                                    </div> :
                                    <Link to='/login' className="btn btn-xs font-bold">LogIn</Link>
                                }
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                                <li>
                                    <p className="justify-between">
                                        {user?.displayName} <br />
                                        {user?.email}
                                        <span className="badge">New</span>
                                    </p>
                                </li>
                                <li><Link to='/' onClick={() => document.getElementById('my-drawer-4').checked = false}>Home</Link></li>
                                <li><Link to='/instructors' onClick={() => document.getElementById('my-drawer-4').checked = false}>Instructors</Link></li>
                                <li><Link to='/allClass' onClick={() => document.getElementById('my-drawer-4').checked = false}>Classes</Link></li>
                                <li><Link to='/contact' onClick={() => document.getElementById('my-drawer-4').checked = false}>Contact</Link></li>
                                <li><Link to={isAdmin?.admin ? '/dashboard/adminHome' : isInstructor?.instructor ? '/dashboard/myClass' : '/dashboard/studentClass'} onClick={() => document.getElementById('my-drawer-4').checked = false}>Dashboard</Link></li>
                                <li><Link onClick={() => { handleLogOut(); document.getElementById('my-drawer-4').checked = false; }}>Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
