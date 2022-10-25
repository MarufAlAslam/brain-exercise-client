import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className="navbar bg-sky-900">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>Courses</a></li>
                        <li><a href='/'>FAQ</a></li>
                        <li><a href='/'>Blogs</a></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-3xl" to='/'>
                    <img src="./student.png" className='logo w-100 mr-2' alt="" />
                    <span className='text-yellow-400'>Brain</span>Exercise
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
                <NavLink to='/login' className='btn btn-ghost'>Sign In</NavLink>
                <NavLink to='/signup' className='btn btn-ghost'>Sign Up</NavLink>
            </div>
        </div >
    );
};

export default Header;