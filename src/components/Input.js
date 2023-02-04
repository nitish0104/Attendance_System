import React from 'react'

const Input = ({ label, type, placeholder, value, className }) => {
	return (
		<>
			<div className='flex flex-col w-[50%]'>

				<label className='text-xl font-semibold'>{label}
				</label>
				<input type={type} placeholder={placeholder} value={value} className="rounded-lg border-2 border-gray-900 p-1 focus:border-2 focus:bg-indigo-200 focus:border-purple-800 focus:text-black" />
			</div>
		</>
	)
}

export default Input
