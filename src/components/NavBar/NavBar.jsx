import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import { GiSelfLove } from "react-icons/gi";
import { getCardToStorage, getWishList } from '../../Utilities/Utiliteis';

const NavBar = () => {
    const { pathname } = useLocation()

    const getCard = getCardToStorage();
    const getWish = getWishList()
    return (
        <div className={`navbar bg-base-100 mb-0  ${pathname === '/' ? 'bg-purple-500  rounded-xl' : ''}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink to='/'
                            className={({ isActive }) => isActive ? '!bg-yellow-400 font-bold' : ''}
                        >Home</NavLink></li>
                        <li><NavLink to='/statics' className={({ isActive }) => isActive ? '!bg-yellow-400 font-bold' : ''}>Statistics</NavLink></li>
                        <li><NavLink to='/deshboard' className={({ isActive }) => isActive ? '!bg-yellow-400 font-bold' : ''}>Dashboard</NavLink></li>
                        <li><NavLink to='/upcoming' className={({ isActive }) => isActive ? '!bg-yellow-400 font-bold' : ''}>Up coming</NavLink></li>

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/' className={({ isActive }) => isActive ? '!bg-yellow-400 font-bold' : ''}>Home</NavLink></li>
                    <li><NavLink to='/statics' className={({ isActive }) => isActive ? '!bg-yellow-400 font-bold' : ''}>Statistics</NavLink></li>
                    <li><NavLink to='/deshboard' className={({ isActive }) => isActive ? '!bg-yellow-400 font-bold' : ''}>Dashboard</NavLink></li>
                    <li><NavLink to='/upcoming' className={({ isActive }) => isActive ? '!bg-yellow-400 font-bold' : ''}>Up coming</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                <div className='relative  border p-2 rounded-full'>
                    <FiShoppingCart className='text-xl'></FiShoppingCart>
                    <span className='absolute -top-2 -right-2  text-yellow-500'>{getCard.length}</span>
                </div>
                <div className='relative border p-2 rounded-full'>
                    <GiSelfLove className='text-xl'></GiSelfLove>
                    <span className='absolute -top-2 -right-2  text-yellow-500'> {getWish.length}</span>
                </div>
            </div>
        </div>
    );
};

export default NavBar;