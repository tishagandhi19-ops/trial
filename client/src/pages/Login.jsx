import React, { useState } from 'react'
import axios from 'axios'

function Login() {
    const [formData,setFormData] = useState({
        email : "",
        password: ""
    });

    const handelLogin = async(e) => {
        e.preventDefault();
        try{
            const response = await axios.post(
                "http://localhost:3000/api/auth/login",
                formData,
                {
                withCredentials: true
                }
            );
            console.log(response.data)
        }catch(err){
            console.log("error in login:",err)
        }
    };
    
  return (
     <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

                <h1 className="text-3xl font-bold text-center mb-6">
                    Log in 
                </h1>
                <form onSubmit={handelLogin}>
                    {/* Email */}
                    <div className="mb-4">

                        <label className="block mb-1 font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value
                                })
                            }
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                    </div>


                    {/* Password */}
                    <div className="mb-6">

                        <label className="block mb-1 font-medium">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    password: e.target.value
                                })
                            }
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                    >
                        LOGIN
                    </button>
                </form>
            </div>
     </div>
  )
}

export default Login
