import React from 'react'
import FormComponent from '../components/common/form/FormComponent'
import TextField from '../components/common/form/TextField'
import { addCompanySchema } from '../validation'
import styled from 'styled-components'
import { useAppDispatch } from '../hooks/useAppReduxHooks'
import { addCompany } from '../store/company'
import { useNavigate } from 'react-router-dom'

const PageTitle = styled.h2`
	text-align: center;
`

const AddCompany = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const onSubmit = (data: { [key: string]: string }) => {
		const reqData = {
			name: data.name,
			address: data.address,
		}

		dispatch(addCompany(reqData))
		navigate('/')
	}

	return (
		<>
			<PageTitle>Новая компания</PageTitle>
			<FormComponent
				validationShema={addCompanySchema}
				onSubmit={onSubmit}
				btnLabel='Добавить'>
				<TextField
					name='name'
					label='Наименование'
					value={''}
					onChange={() => {}}
					error={null}
				/>
				<TextField
					name='address'
					label='Адрес'
					value={''}
					onChange={() => {}}
					error={null}
				/>
			</FormComponent>
		</>
	)
}

export default AddCompany
