import React, { useContext } from 'react';
import { FaSun, FaMoon, FaUserCircle } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ReactTooltip from 'react-tooltip';
import './Header.css'



const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const signOut = () => {
        logOut()
        navigate('/login');
    }
    return (
        <div className="navbar bg-sky-900">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink eventkey="1" to='/' end>HOME</NavLink></li>
                        <li><NavLink eventkey="2" to='/courses' end>COURSES</NavLink></li>
                        <li><NavLink eventkey="3" to='/faqs' end>FAQS</NavLink></li>
                        <li><NavLink eventkey="4" to='/blogs' end>BLOGS</NavLink></li>
                        <li><NavLink eventkey="5" to='/login' end>SIGN IN</NavLink></li>
                        <li><NavLink eventkey="6" to='/signup' end>SIGN UP</NavLink></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-3xl logoBtn" to='/'>
                    <img src="https://marufalaslam.github.io/test/student.png" className='logo w-100 mr-2' alt="" />
                    <span className='text-yellow-400'>Brain</span><span>Exercise</span> <small className='lg:hidden'>BE</small>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><NavLink eventkey="1" to='/' end>HOME</NavLink></li>
                    <li><NavLink eventkey="2" to='/courses' end>COURSES</NavLink></li>
                    <li><NavLink eventkey="3" to='/faqs' end>FAQS</NavLink></li>
                    <li><NavLink eventkey="4" to='/blogs' end>BLOGS</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <label className="swap swap-rotate mr-3">

                    <input type="checkbox" />

                    <span className="swap-on fill-current w-10 h-10">
                        <FaSun></FaSun>
                    </span>

                    <span className="swap-off fill-current w-10 h-10">
                        <FaMoon></FaMoon>
                    </span>

                </label>
                {
                    user ?
                        (
                            // display user image
                            <div className='flex items-center'>
                                <Link to='/dashboard' data-tip={user.displayName ? user.displayName : user.email} className="tooltip hover:tooltip-open tooltip-success tooltip-bottom">
                                    {
                                        user.photoURL ? (
                                            <img src={user.photoURL} alt="" className='w-10 h-10 rounded-full dp' />
                                        ) :
                                            (
                                                <FaUserCircle className='block mx-auto my-4 text-4xl'></FaUserCircle>
                                            )
                                    }
                                </Link>
                                <button onClick={signOut} className='btn btn-ghost ml-2'>Sign Out</button>
                            </div>
                        )
                        :
                        (<div>
                            <NavLink to='/login' className='btn btn-ghost hid'>Sign In</NavLink>
                            <NavLink to='/signup' className='btn btn-ghost hid'>Sign Up</NavLink>
                        </div>)
                }


            </div>
            <ReactTooltip />
        </div >
    );
};

export default Header;