import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DataLoader from '../components/common/DataLoader'
import MainLayout from '../layouts/main'
import Home from './home'

const Pages = () => {
	return (
		<MainLayout>
			<DataLoader>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</DataLoader>
		</MainLayout>
	)
}

export default Pages
