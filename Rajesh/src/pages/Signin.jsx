import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { signInStart , signInSuccess, signInFailure} from "../redux/user/userSlice.js";

export default function Signin() {
    const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state)=>state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(signInStart());
            const res = await fetch("/api/auth/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            console.log(data);

            if (data.success === false) {
              dispatch(signInFailure(data.message));
                return;
            }

            // On success, clear errors, stop loading, and navigate to /signin
           dispatch(signInSuccess(data));
            navigate("/");
        } catch (error) {
          dispatch(signInFailure(error.message));
        }
    };

    return (
        <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    className="border p-3 rounded-lg"
                    id="email"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border p-3 rounded-lg"
                    id="password"
                    onChange={handleChange}
                />

                <button
                    disabled={loading} // Disable button when loading
                    type="submit"
                    className="bg-slate-700 text-white p-3 rounded-lg uppercase text-center hover:text-green-400 font-bold py-2 px-4 shadow-md hover:shadow-lg hover:shadow-blue-500/50 transition duration-300"
                >
                    {loading ? "Loading..." : "Sign In"} {/* Button text changes based on loading */}
                </button>
            </form>

            <div className="flex gap-2 mt-5">
                <p>Don't have an account?</p>
                <Link to="/signup">
                    <span className="text-blue-600">Sign Up</span>
                </Link>
            </div>
            {error && <p className="text-red-500 mt-5">{error}</p>} {/* Error message */}
        </div>
    );
}
