import React, { useState } from "react";
import axios from "axios";

import { useNavigate,Link } from "react-router-dom";
function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "employ"
    });

    const handleRegister = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post(
                "http://localhost:3000/api/auth/register",
                formData,
                {
                withCredentials: true
                }
            );

            console.log(response.data);
            setFormData({
                name: "",
                email: "",
                password: "",
                role: "employ"

            })
            navigate("/login")

        } catch (error) {

            console.log(error);

        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

                <h1 className="text-3xl font-bold text-center mb-6">
                    Create Account
                </h1>

                <form onSubmit={handleRegister}>

                    {/* Name */}
                    <div className="mb-4">

                        <label className="block mb-1 font-medium">
                            Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value
                                })
                            }
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                    </div>


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

                    {/* Role */}
<div className="mb-6">

    <label className="block mb-2 font-medium">
        Select Role
    </label>

    <div className="flex gap-6">

        <label className="flex items-center gap-2">
            <input
                type="checkbox"
                checked={formData.role === "employ"}
                onChange={() =>
                    setFormData({
                        ...formData,
                        role: "employ"
                    })
                }
                className="w-4 h-4"
            />
            employ
        </label>

        <label className="flex items-center gap-2">
            <input
                type="checkbox"
                checked={formData.role === "manger"}
                onChange={() =>
                    setFormData({
                        ...formData,
                        role: "manger"
                    })
                }
                className="w-4 h-4"
            />
            manger
        </label>

    </div>

</div>


                    {/* Register button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                    >
                        Register
                    </button>
          
                </form>
                 {/* Login link */} <p className="text-center mt-4"> Already have an account?{" "}
                     <Link to="/login" className="text-blue-600 font-medium" > Login </Link> 
                     </p>
            </div>
 

        </div>
    );
}

export default Register;