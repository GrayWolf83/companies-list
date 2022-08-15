import React from 'react'
import FormComponent from '../components/common/form/FormComponent'
import TextField from '../components/common/form/TextField'
import { addEmployeeSchema } from '../validation'
import styled from 'styled-components'
import { useAppDispatch } from '../hooks/useAppReduxHooks'
import { addCompany } from '../store/company'
import { useNavigate } from 'react-router-dom'
import SelectField from '../components/common/form/SelectField'

const PageTitle = styled.h2`
	text-align: center;
`

const AddEmployee = () => {
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
			<PageTitle>Новый сотрудник</PageTitle>
			<FormComponent
				validationShema={addEmployeeSchema}
				onSubmit={onSubmit}
				btnLabel='Добавить'>
				<TextField
					name='firstName'
					label='Имя'
					value={''}
					onChange={() => {}}
					error={null}
				/>
				<TextField
					name='lastName'
					label='Фамилия'
					value={''}
					onChange={() => {}}
					error={null}
				/>
				<TextField
					name='position'
					label='Должность'
					value={''}
					onChange={() => {}}
					error={null}
				/>
				{/* <SelectField /> */}
			</FormComponent>
		</>
	)
}

export default AddEmployee
