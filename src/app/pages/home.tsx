import React from 'react'
import styled from 'styled-components'
import CompaniesTable from '../components/common/CompaniesTable'
import EmployeesTable from '../components/common/EmployeesTable'

const HomeInner = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`

const Home = () => {
	return (
		<HomeInner>
			<CompaniesTable />
			<EmployeesTable />
		</HomeInner>
	)
}

export default Home
