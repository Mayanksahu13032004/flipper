import React ,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const [user, setUser] = useState({
      email: "",
      password: ""
    });
  
    const handleInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
  
      setUser({ ...user, [name]: value });
    }
  
      const handleSubmit=async(e)=>{
      e.preventDefault();
       const apiUrl = 'http://localhost:5000/api/v1/project/users/login';
  
       try {
         const response = await fetch(apiUrl, {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify(user),
         });
     console.log("if staerted");
         if (response.status==200) {
          toast.success('User Login successfully!');
          navigate('/')
          console.log("successfulr login");
          //  throw new Error('Login successfuly');
         }
         else{
          console.log("not register yet");
          toast.error('User not registered with this email!');
         }
      } catch (error) {
        console.error('Error during login:', error);
        toast.error('User not registered with this email!');
      }
  }

  return (


<div className="flex justify-center items-center h-screen bg-gray-900">
  <div className="text-center w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-lg">
    <h1 className="text-4xl font-bold mb-8 text-gray-50">Login to Your Account</h1>
    <form onSubmit={handleSubmit}>
      <div className="mb-6 text-left">
        <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter Email"
          autoComplete="off"
          name="email"
          className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
          onChange={handleInput}
        />
      </div>
      <div className="mb-6 text-left">
        <label htmlFor="password" className="block text-lg font-medium text-gray-300 mb-2">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          autoComplete="off"
          name="password"
          className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
          onChange={handleInput}
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-gray-700 text-gray-100 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 text-xl"
      >
        Login
      </button>
    </form>
  
  </div>
  <ToastContainer /> 
</div>



  )
}
export default Login
