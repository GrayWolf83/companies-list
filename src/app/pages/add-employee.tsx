import React, { useState } from 'react'
import FormComponent from '../components/common/form/FormComponent'
import TextField from '../components/common/form/TextField'
import { addEmployeeSchema } from '../validation'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../hooks/useAppReduxHooks'
import { useNavigate } from 'react-router-dom'
import AppModal from '../components/common/AppModal'
import { addEmployee, getEmployeesCurrentCompany } from '../store/employee'

const PageTitle = styled.h2`
	text-align: center;
`

const AddEmployee = () => {
	const [showSearchModal, setSearchShowModal] = useState(false)
	const dispatch = useAppDispatch()
	const currentCompany = useAppSelector(getEmployeesCurrentCompany())
	const navigate = useNavigate()

	const onSubmit = (data: { [key: string]: string }) => {
		const reqData = {
			firstName: data.firstName,
			lastName: data.lastName,
			position: data.position,
			company: currentCompany,
		}

		dispatch(addEmployee(reqData))
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
			</FormComponent>
			<AppModal show={showSearchModal} setShow={setSearchShowModal} />
		</>
	)
}

export default AddEmployee
