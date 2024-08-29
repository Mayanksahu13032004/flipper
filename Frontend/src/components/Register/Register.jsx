import React ,{useState} from 'react'
function Register() {

  const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
      });
    
      const [message, setMessage] = useState('');
    
      const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
    
        setUser({ ...user, [name]: value });
        console.log("name",name);
        console.log("email",email);
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
    
        try {
          const response = await fetch('http://localhost:5000/api/v1/project/users/register', {
            method: "POST",
            headers: {
              'Content-Type': "application/json"
            },
            body: JSON.stringify(user)
          });
    
          const responseData = await response.json();
          if (response.status === 201) {
            setMessage(responseData.message);
            console.log("patient registered successfully");
          } else {
            setMessage(responseData.message || 'User not registered');
          }
        } catch (error) {
          throw error
        }
      }
  return (
  //   <div className='text-center  h-[100vh] w-[100%]'>
  //   <h1 className='text-4xl mb-5  text-gray-50'>Register your Account</h1>
  //   <div className='   mx-auto bg-gray-300 h-[70vh] w-[50%] flex flex-col align-center justify-center rounded-2xl'>
  //   <form onSubmit={handleSubmit}>
  //     <div className='mb-6 p-4 text-3xl'>
  //       <label htmlFor="name">
  //         <strong>Name:</strong>
  //       </label>
  //       <input
  //         type="text"
  //         placeholder='Enter Name'
  //         autoComplete='off'
  //         name="name"
  //        className='form-control form-control rounded-3XL rounded-xl text-xl p-1 text-center  text-gray-500 ml-20'
  //         onChange={handleInput}
  //       />
  //     </div>

  //     <div className='mb-6 text-3xl'>
  //       <label htmlFor="email">
  //         <strong>Email:</strong>
  //       </label>
  //       <input
  //         type="email"
  //         placeholder='Enter Email'
  //         autoComplete='off'
  //         name="email"
  //         className='form-control form-control rounded-3XL rounded-xl text-xl p-1 text-center  text-gray-500 ml-20'
  //         onChange={handleInput}
  //       />
  //     </div>

  //     <div className='mb-6  text-3xl'>
  //       <label className='mr-6'  htmlFor="password">
  //         <strong>Password:</strong>
  //       </label>
  //       <input
  //         type="password"
  //         placeholder='Enter Password'
  //         autoComplete='off'
  //         name="password"
  //         className='form-control form-control ml-2 rounded-3XL rounded-xl text-xl p-1 text-center  text-gray-500 '
  //         onChange={handleInput}
  //       />
  //     </div>

  //     <button type='submit' className='btn mb-6 text-2xl text-gray-100 hover:text-white btn-success  rounded-xl hover:bg-gray-500 bg-gray-600 p-3 pt-2 pb-2'>Register</button>
  //   <p className='mb-6 font-semibold text-xl'>IF YOU HAVE AN ACCOUNT SO PLEASE LOGIN</p>
  //      <a className='btn mb-6 text-2xl text-gray-100 hover:text-white btn-success  rounded-xl hover:bg-gray-500 bg-gray-600 p-3 pt-2 pb-2' href="/Getstarted">Login</a>
     
  //   </form>
  //   {<p className='text-4xl '>{message}</p>}
  //   </div>
  // </div>

<div className="flex justify-center items-center h-screen bg-gray-900">
  <div className="text-center w-full max-w-lg bg-gray-800 p-8 rounded-2xl shadow-lg">
    <h1 className="text-4xl font-bold mb-8 text-gray-50">Register Your Account</h1>
    <form onSubmit={handleSubmit}>
      <div className="mb-6 text-left">
        <label htmlFor="name" className="block text-lg font-medium text-gray-300 mb-2">
          Name
        </label>
        <input
          type="text"
          placeholder="Enter Name"
          autoComplete="off"
          name="name"
          className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
          onChange={handleInput}
        />
      </div>
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
        Register
      </button>
      <p className="mt-6 text-xl text-gray-300">
        Already have an account?{" "}
        <a href="/Getstarted" className="text-blue-400 hover:underline">
          Login
        </a>
      </p>
    </form>
    {message && <p className="text-2xl text-red-500 mt-4">{message}</p>}
  </div>
</div>


  )
}

export default Register
