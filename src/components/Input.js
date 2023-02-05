import React from 'react'

const Input = ({ label, type, placeholder, value, className , option}) => {
	return (
		<>
			<div className='flex flex-col w-[50%]'>

				<label className='text-xl font-semibold'>{label}
				</label>
				<input type={type} placeholder={placeholder} value={value}  className="rounded-lg border-2 border-gray-900 p-1   focus:outline-blue-800 focus:text-black" />
			</div>
		</>
	)
}

export default Input
