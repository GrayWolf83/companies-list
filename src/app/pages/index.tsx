import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DataLoader from '../components/common/DataLoader'
import ErrorHandler from '../components/common/ErrorHandler'
import MainLayout from '../layouts/main'
import AddCompany from './add-company'
import AddEmployee from './add-employee'
import Home from './home'

const Pages = () => {
	return (
		<MainLayout>
			<DataLoader>
				<ErrorHandler>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/add-company' element={<AddCompany />} />
						<Route path='/add-employee' element={<AddEmployee />} />
					</Routes>
				</ErrorHandler>
			</DataLoader>
		</MainLayout>
	)
}

export default Pages
