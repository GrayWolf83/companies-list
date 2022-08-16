import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useAppReduxHooks'
import {
	clearEmployeesList,
	deleteEmployee,
	getEmployeesCurrentCompany,
	getEmployeesCursor,
	getEmployeesHasNextPage,
	getEmployeesList,
	getEmployeesLoadingStatus,
	loadEmployeesExtraList,
	loadEmployeesList,
} from '../../store/employee'
import Loader from '../ui/Loader'
import TableContainer from '../ui/TableContainer'
import LoadButton from '../table/LoadButton'
import TableTitle from '../table/TableTitle'
import AppTable from '../ui/AppTable'
import TableThead from '../table/TableThead'
import TableTbodyEmployee from '../table/TableTbodyEmployee'

const EmployeesTable = () => {
	const [currentEmployee, setCurrentEmployee] = useState('')
	const [checkedAll, setChecked] = useState(false)
	const dispatch = useAppDispatch()
	const currentCompany = useAppSelector(getEmployeesCurrentCompany())
	const employeesCursor = useAppSelector(getEmployeesCursor())
	const employees = useAppSelector(getEmployeesList())
	const isLoading = useAppSelector(getEmployeesLoadingStatus())
	const hasNextPage = useAppSelector(getEmployeesHasNextPage())

	useEffect(() => {
		if (currentCompany) {
			dispatch(loadEmployeesList(currentCompany))
		} else {
			dispatch(clearEmployeesList())
		}

		return () => setCurrentEmployee('')
	}, [currentCompany, dispatch])

	const changeCurrentEmployee = (id: string) => {
		if (currentEmployee === id) {
			setCurrentEmployee('')
		} else {
			setCurrentEmployee(id)
		}
	}

	const handleDeleteEmployee = () => {
		dispatch(deleteEmployee(currentEmployee))
		setCurrentEmployee('')
	}

	const handleLoadExtraListEmployees = () => {
		dispatch(loadEmployeesExtraList(currentCompany, employeesCursor))
	}

	return (
		<TableContainer>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<div>
						<TableTitle
							title='Сотрудники'
							addPath='/add-employee'
							deleteBtnDisabled={!Boolean(currentEmployee)}
							deleteBtnonClick={handleDeleteEmployee}
							showAddButton={Boolean(currentCompany)}
						/>

						<AppTable>
							<TableThead
								checkboxOnChange={setChecked}
								checkboxChecked={checkedAll}
								names={['Имя', 'Фамилия', 'Должность']}
							/>
							<TableTbodyEmployee
								items={employees}
								current={currentEmployee}
								changeCurrent={changeCurrentEmployee}
								checkedAll={checkedAll}
							/>
						</AppTable>
					</div>
					{hasNextPage && (
						<LoadButton onClick={handleLoadExtraListEmployees} />
					)}
				</>
			)}
		</TableContainer>
	)
}

export default EmployeesTable
