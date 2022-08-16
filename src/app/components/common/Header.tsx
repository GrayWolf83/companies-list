import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderContainer = styled.header`
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	margin-bottom: 20px;
	padding: 10px;
`
const HeaderText = styled.h2``

const Header = () => {
	return (
		<HeaderContainer>
			<Link to='/'>
				<HeaderText>Список компаний</HeaderText>
			</Link>
		</HeaderContainer>
	)
}

export default Header
