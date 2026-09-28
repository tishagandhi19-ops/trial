import React, { useEffect, useState } from "react";
import axios from "axios";

function Allusers() {

    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("all");

    useEffect(() => {

        const getUsers = async () => {
            try {

                const response = await axios.get(
                    "http://localhost:3000/api/auth/alluser",
                    {
                        withCredentials: true
                    }
                );

                setUsers(response.data.user);

            } catch (error) {
                console.log(error);
            }
        };

        getUsers();

    }, []);


    const filteredUsers =
        filter === "all"
            ? users
            : users.filter((user) => user.role === filter);


    return (
        <div className="min-h-screen bg-gray-100 p-8">

            <h1 className="text-3xl font-bold mb-6">
                All Users
            </h1>


            {/* Filter Buttons */}
            <div className="flex gap-3 mb-6">

                <button
                    onClick={() => setFilter("all")}
                    className="px-4 py-2 bg-gray-600 text-white rounded"
                >
                    All
                </button>

                <button
                    onClick={() => setFilter("employ")}
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                    Employ
                </button>

                <button
                    onClick={() => setFilter("manger")}
                    className="px-4 py-2 bg-green-600 text-white rounded"
                >
                    Manger
                </button>

            </div>


            {/* Users */}
            <div>

                {filteredUsers.map((user) => (

                    <div
                        key={user._id}
                        className="bg-white p-4 mb-3 rounded-lg shadow"
                    >

                        <h2 className="text-xl font-bold">
                            {user.name}
                        </h2>

                        <p className="text-gray-600">
                            {user.email}
                        </p>

                        <p className="mt-2">
                            Role: {user.role}
                        </p>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Allusers;
