import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/main'
import Home from './home'

const Pages = () => {
	return (
		<MainLayout>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</MainLayout>
	)
}

export default Pages
