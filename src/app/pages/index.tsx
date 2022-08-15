import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DataLoader from '../components/common/DataLoader'
import MainLayout from '../layouts/main'
import AddCompany from './add-company'
import AddEmployee from './add-employee'
import Home from './home'

const Pages = () => {
	return (
		<MainLayout>
			<DataLoader>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/add-company' element={<AddCompany />} />
					<Route path='/add-employee' element={<AddEmployee />} />
				</Routes>
			</DataLoader>
		</MainLayout>
	)
}

export default Pages
