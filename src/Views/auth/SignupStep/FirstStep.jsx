import React, { useState } from 'react'

const FirstStep = () => {
       const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        businessName: '',
        businessCategory: '',
        phoneCode: '+1',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    return (
        <div>
            <div className="mb-3">
                <h2 className="text-xl font-bold text-black mb-2">Business Profile Setup</h2>
                <p className="text-black font-semibold">
                    Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet.
                </p>
            </div>
            <hr className="text-secondarycolor" />

            <div className="mb-4">
                <label className="block text-xl text-black font-medium mb-2" htmlFor="fullName">
                    Full Name
                </label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g Hanna Yadin"
                    className="w-full px-3 py-2 border bg-[#01ade1] border-gray-300 rounded-md text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-xl text-black font-medium mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="abc@gmail.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-[#01ade1]  text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>

            <div className="mb-6">
                <label className="block text-xl text-black font-medium mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="********"
                    className="w-full px-3 py-2 border border-gray-300 bg-[#01ade1]  text-white placeholder:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>

         
        </div>
    )
}

export default FirstStep
