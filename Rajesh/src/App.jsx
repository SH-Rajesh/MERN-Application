import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Signin from "./pages/Signin.jsx";
import Signup from "./pages/Signup.jsx";
import Profile from "./pages/Profile.jsx";
import About from "./pages/About.jsx";
import {Header} from './components/Header.jsx';
import PrivatetRoute from "./components/PrivatetRoute.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Header /> {/* Ensure Header is imported and used properly */}
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Signin" element={<Signin/>}/>
            <Route path="/Signup" element={<Signup/>}/>
            <Route path="/about" element={<About/>}/>
            <Route element={<PrivatetRoute/>} >
            <Route path="/profile" element={<Profile/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    );
}