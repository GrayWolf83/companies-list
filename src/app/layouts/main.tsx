import React from 'react'
import styled from 'styled-components'
import Header from '../components/common/Header'

interface IProps {
	children: React.ReactNode
}

const Main = styled.main`
	position: fixed;
	top: 70px;
	width: 100%;
	height: calc(100vh - 70px);
	padding: 10px;
`

const MainLayout = ({ children }: IProps) => {
	return (
		<>
			<Header />
			<Main>{children}</Main>
		</>
	)
}

export default MainLayout
