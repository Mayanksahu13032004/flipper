import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AllRegisterUser() {

    const [register,setregister]=useState([]);
    useEffect(()=>{
        const getAllRegisterUsers=async()=>{
            
    const response=await axios.get('http://localhost:5000/api/v1/project/users/get-register-user')
    setregister(response.data);
        
            
        };
        getAllRegisterUsers();
    },[])

  return (
    <div>
    <h2 className='text-4xl mb-3 text-center font-bold'>All Register Users</h2>
    <ul>
        {register.map((register) => (
            <li  className='text-xl ml-2 font-semibold mb-3' key={register._id}>
                <p className='text-green-600'>Username-{register.fullname}</p>
                <p className='text-gray-500 font-semibold hover:text-gray-300'> Email-{register.email}</p>
                <p >Created-At {register.createdAt}</p>
                </li>
            
            
        ))}
    </ul>
</div>
  )
}

export default AllRegisterUser
