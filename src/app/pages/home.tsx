import React from 'react'
import { useAppSelector } from '../hooks/useAppReduxHooks'
import { getCompaniesList } from '../store/company'

const Home = () => {
	const companies = useAppSelector(getCompaniesList())
	console.log('companies', companies)

	return (
		<>
			<h1>Home page</h1>
		</>
	)
}

export default Home
