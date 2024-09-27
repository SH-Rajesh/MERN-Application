import { useSelector } from "react-redux";

export default function Profile() {
    const { currentUser } = useSelector((state)=> state.user)
    return(
        <div className='p-3 max-w-lg mx-auto'>
            <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
            <form className='flex flex-col gap-3'>
                <img src={currentUser.avatar} alt='profile'
                     className=' self-center mt-2 rounded-full h-24 w-24 object-cover cursor-pointer'/>
                <input id='username' type='text' placeholder='username' className='border p-3 rounded-lg'/>
                <input id='email' type='email' placeholder='email' className='border p-3 rounded-lg'/>
                <input id='password' type='password' placeholder='password' className='border p-3 rounded-lg'/>
                <button className='font-myriad text-lg bg-slate-600 text-white p-3 rounded-lg  text-center hover:text-green-400 font-bold py-2 px-4 shadow-md hover:shadow-lg hover:shadow-blue-500/50 transition duration-300'>Update</button>
            </form>
            <div className='flex justify-between mt-5'>
                <span className='text-red-700'>Delete account</span>
                <span className='text-red-700'>Sign out</span>

            </div>
        </div>
    )
}