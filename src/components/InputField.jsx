import React from 'react'

const InputField = ({ label, type, value, onChange, placeholder, required }) => {
    return (
        <div className="w-full">
            <label className="block mb-3 text-sm font-medium">{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className="w-full sm:w-[500px] md:w-[600px] lg:w-[650px] px-3 py-2 bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
};

export default InputField;
