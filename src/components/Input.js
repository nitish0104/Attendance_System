import React from 'react'

const Input = ({ label, type, placeholder, value, onChange, id }) => {
	return (
		<>
			<div className='flex flex-col w-[50%]'>

				<label className=' font-semibold'>{label}
				</label>
				<input type={type} placeholder={placeholder} id={id} onChange={onChange} value={value} className="rounded-lg border-2 border-gray-900 p-1   focus:outline-blue-800 focus:text-black " autoComplete="on" />
			</div>
		</>
	)
}

export default Input
