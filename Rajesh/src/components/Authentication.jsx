import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase.js';
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice.js";
import { useNavigate } from 'react-router-dom';

export default function Authentication() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: result.user.displayName, email: result.user.email, photo: result.user.photoURL }),
            })
            const data = await res.json()
            dispatch(signInSuccess(data));
            navigate('/');
        } catch (error) {
            console.error('Error during sign-in:', error.message);
        }
    };

    return (
        <button
            type="button"
            onClick={handleGoogleClick}
            className="text-2xl font-myriad bg-red-700 text-white p-3 rounded-lg text-center hover:text-green-400 font-bold py-2 px-4 shadow-md hover:shadow-lg hover:shadow-blue-500/50 transition duration-300"
        >
            Continue With Google
        </button>
    );
}
