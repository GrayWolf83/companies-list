import React from 'react'
import styled from 'styled-components'
import FormComponent from './form/FormComponent'
import { searchCompanySchema } from '../../validation'
import TextField from './form/TextField'

interface IProps {
	show: boolean
	setShow: (val: boolean) => void
}

const ModalContainer = styled.div`
	position: absolute;
	top: -70px;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.4);
	display: flex;
	justify-content: center;
	align-items: center;
`

const ModalBlock = styled.div`
	width: 700px;
	height: 350px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #fff;
	border-radius: 5px;
	background-image: url('bg.jpeg');
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	margin-top: -100px;

	@media (max-width: 768px) {
		width: 500px;
		height: 200px;
	}

	@media (max-width: 580px) {
		width: 90%;
		height: 200px;
	}
`

const AppModal = ({ show, setShow }: IProps) => {
	const handleSubmit = (data: { [key: string]: string }) => {
		setShow(false)
	}

	return (
		<ModalContainer style={{ display: show ? 'flex' : 'none' }}>
			<ModalBlock>
				<FormComponent
					btnLabel='Найти'
					validationShema={searchCompanySchema}
					onSubmit={handleSubmit}>
					<TextField
						name='value'
						label='Поиск'
						onChange={() => {}}
						value=''
						error={null}
					/>
				</FormComponent>
			</ModalBlock>
		</ModalContainer>
	)
}

export default AppModal
