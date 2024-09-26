import React from "react";
import {Link} from "react-router-dom";

export default function Signup() {
    return (
        <div className='p-3 max-w-lg mx-auto'>
            <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
            <form className='flex flex-col gap-3'>
                <input
                    type="text"
                    placeholder="User Name:"
                    className="border p-3 rounded-lg"
                    id="username"
                    required=''
                />
                <input
                    type="email"
                    placeholder="Email:"
                    className="border p-3 rounded-lg"
                    id="email"
                    required=''
                />
                <input
                    type="password"
                    placeholder="Password:"
                    className="border p-3 rounded-lg"
                    id="password"
                    required=''
                />
                <botton className='bg-slate-700 text-white p-3 rounded-lg uppercase text-center hover:text-green-400 font-bold py-2 px-4 shadow-md hover:shadow-lg hover:shadow-blue-500/50 transition duration-300'>Sign Up</botton>
            </form>
            <div className='flex gap-2 mt-5'>
                <p>Already have account?</p>
                <Link to={"/signin"}>
                    <span className='text-blue-600'>Sign In</span>
                </Link>

            </div>
        </div>
    );
}
