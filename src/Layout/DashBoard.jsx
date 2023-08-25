import { Link, Outlet } from "react-router-dom";
import useAdmin from "../component/useAdmin";
import useInstructor from "../component/useInstructor";
import { FaHome } from 'react-icons/fa';
import { BsCartDash } from "react-icons/bs";
import { AiFillCheckSquare, AiFillControl, AiFillAppstore, AiFillPlusCircle, AiOutlineHome } from "react-icons/ai";
import { ImBook } from "react-icons/im";
import DashboardNavbar from "../Pages/Shared/Navbar/DashboardNavbar";
import { RxAvatar } from "react-icons/rx";
import { BiBookReader } from "react-icons/bi";

const DashBoard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor, isInstructorLoading] = useInstructor();
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <DashboardNavbar></DashboardNavbar>
                    <label htmlFor="my-drawer-2" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  drawer-button bg-[#626dd4b5] text-white lg:hidden ms-5 mt-4">Dashboard Menu</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full font-semibold bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        {
                            isAdmin?.admin ? <>
                                <li><Link to='/dashboard/adminHome'><FaHome></FaHome>Admin Home</Link></li>
                                <li><Link to='/dashboard/manageClass' reload><AiFillAppstore></AiFillAppstore>Manage Classes</Link></li>
                                <li><Link to='/dashboard/allUsers'><AiFillControl></AiFillControl>Manage Users</Link></li>
                                <div className="divider"></div>
                                <li><Link to='/'><AiOutlineHome></AiOutlineHome>Home</Link></li>
                                <li><Link to='/instructors'><RxAvatar></RxAvatar>Instructors</Link></li>
                                <li><Link to='/allClass'><BiBookReader></BiBookReader>Classes</Link></li>
                            </>
                                : <>

                                </>


                        }
                        {
                            isInstructor?.instructor ? <>
                                <li ><Link to='/dashboard/addClass'><AiFillPlusCircle></AiFillPlusCircle>Add a Class</Link></li>
                                <li><Link to='/dashboard/myClass'><ImBook></ImBook>My Class</Link></li>
                                <div className="divider"></div>
                                <li><Link to='/'><AiOutlineHome></AiOutlineHome>Home</Link></li>
                                <li><Link to='/instructors'><RxAvatar></RxAvatar>Instructors</Link></li>
                                <li><Link to='/allClass'><BiBookReader></BiBookReader>Classes</Link></li>
                            </> : <>

                            </>
                        }
                        {isAdmin?.admin || isInstructor?.instructor || isInstructorLoading ? <> </> :
                            <>
                                <li><Link to='/dashboard/studentClass'><BsCartDash></BsCartDash>My Selected Classes</Link></li>
                                <li><Link to='/dashboard/enrolledClass'><AiFillCheckSquare></AiFillCheckSquare>My Enrolled Classes</Link></li>
                                <div className="divider"></div>
                                <li><Link to='/'><AiOutlineHome></AiOutlineHome>Home</Link></li>
                                <li><Link to='/instructors'><RxAvatar></RxAvatar>Instructors</Link></li>
                                <li><Link to='/allClass'><BiBookReader></BiBookReader>Classes</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;