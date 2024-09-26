import React from 'react'; // Make sure React is imported
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className='bg-slate-200 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to='/'>
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                    <span className='text-slate-500'>Rajesh</span>
                    <span className='text-slate-700'>Sharma</span>
                </h1>
                </Link>
                <form className='bg-slate-100 p-3 rounded-lg flex items-center text-black font-bold py-3 px-4 animate-glow'>
                    <input
                        className='bg-transparent focus:outline-none w-24 sm:w-64' // Added outline-none to remove default focus outline
                        type='text'
                        placeholder='Search...'
                        aria-label='Search' // Added aria-label for accessibility
                    />
                    <button type='submit' className='ml-2'>
                        <FaSearch className='text-slate-600' />
                    </button>
                </form>
                <ul className='flex gap-2'>
                    <Link to='/'><li className='hidden sm:inline text-slate-700 hover:text-green-400 font-bold py-2 px-4 rounded shadow-md hover:shadow-lg hover:shadow-blue-500/50 transition duration-300'>Home</li></Link>
                    <Link to='/About'><li className=' sm:inline text-slate-700 hover:text-green-400 font-bold py-2 px-4 rounded shadow-md hover:shadow-lg hover:shadow-blue-500/50 transition duration-300'>About</li></Link>
                    <Link to='/Signin'><li className=' sm:inline text-slate-700 hover:text-green-400 font-bold py-2 px-4 rounded shadow-md hover:shadow-lg hover:shadow-blue-500/50 transition duration-300'>SignIn</li></Link>
                </ul>
            </div>
        </header>
    );
}
