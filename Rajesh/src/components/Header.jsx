import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa'; // FaBars for the hamburger icon
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

export function Header() {
    const { currentUser } = useSelector(state => state.user);
    const [menuOpen, setMenuOpen] = useState(false); // state for mobile menu

    // Toggle menu function
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className='bg-slate-200 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to='/'>
                    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                        <span className='font-myriad text-3xl text-slate-500'>Rajesh</span>
                        <span className='font-myriad text-3xl text-slate-700'>Sharma</span>
                    </h1>
                </Link>
                <form className='bg-slate-100 p-3 rounded-lg flex items-center text-black font-bold py-3 px-4 animate-glow'>
                    <input
                        className='bg-transparent focus:outline-none w-24 sm:w-64'
                        type='text'
                        placeholder='Search...'
                        aria-label='Search'
                    />
                    <button type='submit' className='ml-2'>
                        <FaSearch className='text-slate-600' />
                    </button>
                </form>

                {/* Hamburger icon for small screens */}
                <button className="sm:hidden" onClick={toggleMenu}>
                    {menuOpen ? <FaTimes className="text-2xl"/> : <FaBars className="text-2xl"/>}
                </button>

                {/* Desktop and small screen profile/menu */}
                <ul className='flex gap-2'>
                    <Link to='/'><li className='font-myriad text-lg text-slate-700 hover:text-green-400 font-bold py-2 px-4 rounded shadow-md hover:shadow-lg hover:shadow-blue-500/50 transition duration-300 hidden sm:inline'>Home</li></Link>
                    <Link to='/About'><li className='font-myriad text-lg text-slate-700 hover:text-green-400 font-bold py-2 px-4 rounded shadow-md hover:shadow-lg hover:shadow-blue-500/50 transition duration-300 hidden sm:inline'>About</li></Link>
                    <Link to='/profile'>
                        {currentUser ? (
                            <img className='rounded-full h-8 w-8 object-cover' src={currentUser.avatar} alt='image missing'/>
                        ) : (
                            <li className='font-myriad text-lg text-slate-700 hover:text-green-400 font-bold py-2 px-4 rounded shadow-md hover:shadow-lg hover:shadow-blue-500/50 transition duration-300'>Sign In</li>
                        )}
                    </Link>
                </ul>
            </div>

            {/* Popup menu for small screens */}
            {menuOpen && (
                <ul className='sm:hidden bg-slate-200 p-4 flex flex-col items-center gap-4'>
                    <Link to='/'><li className='font-myriad text-lg text-slate-700 hover:text-green-400 font-bold py-2 px-4 rounded shadow-md hover:shadow-lg transition duration-300'>Home</li></Link>
                    <Link to='/About'><li className='font-myriad text-lg text-slate-700 hover:text-green-400 font-bold py-2 px-4 rounded shadow-md hover:shadow-lg transition duration-300'>About</li></Link>
                    <Link to='/profile'>
                        {currentUser ? (
                            <img className='rounded-full h-8 w-8 object-cover' src={currentUser.avatar} alt='image missing'/>
                        ) : (
                            <li className='font-myriad text-lg text-slate-700 hover:text-green-400 font-bold py-2 px-4 rounded shadow-md hover:shadow-lg transition duration-300'>Sign In</li>
                        )}
                    </Link>
                </ul>
            )}
        </header>
    );
}
