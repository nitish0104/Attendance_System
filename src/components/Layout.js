import React from 'react'

const Layout = ({ children }) => {
	return (
		<div className=' min-h-screen bg-gradient-to-r from-indigo-300 to-purple-400 ' >
			{children}
		</div>
	)
}

export default Layout