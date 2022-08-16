import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useAppReduxHooks'
import {
	deleteCompany,
	getCompaniesCursor,
	getCompaniesHasNextPage,
	getCompaniesList,
	getCompaniesLoadingStatus,
	loadCompaniesExtraList,
} from '../../store/company'
import {
	clearEmployeesList,
	getEmployeesCurrentCompany,
	loadEmployeesList,
	setEmployeesCurrentCompany,
} from '../../store/employee'
import AppTable from '../ui/AppTable'
import Loader from '../ui/Loader'
import TableContainer from '../ui/TableContainer'
import LoadButton from '../table/LoadButton'
import TableTitle from '../table/TableTitle'
import TableThead from '../table/TableThead'
import TableTbodyCompany from '../table/TableTbodyCompany'

const CompaniesTable = () => {
	const [current, setCurrent] = useState('')
	const currentCompany = useAppSelector(getEmployeesCurrentCompany())
	const [checkedAll, setChecked] = useState(false)
	const dispatch = useAppDispatch()
	const companies = useAppSelector(getCompaniesList())
	const companyLoading = useAppSelector(getCompaniesLoadingStatus())
	const hasNextPage = useAppSelector(getCompaniesHasNextPage())
	const cursorCompanies = useAppSelector(getCompaniesCursor())

	useEffect(() => {
		setCurrent(currentCompany)
	}, [])

	const changeCurrentCompany = (id: string) => {
		if (current === id) {
			setCurrent('')
			dispatch(clearEmployeesList())
		} else {
			setCurrent(id)
			dispatch(setEmployeesCurrentCompany(id))
			dispatch(loadEmployeesList(id))
		}
	}

	const handleDeleteCompany = () => {
		dispatch(deleteCompany(current))
		setCurrent('')
	}

	const loadExtraListCompanies = () => {
		dispatch(loadCompaniesExtraList(cursorCompanies))
	}

	return (
		<TableContainer>
			{companyLoading ? (
				<Loader />
			) : (
				<>
					<div>
						<TableTitle
							title='Компании'
							addPath='/add-company'
							deleteBtnDisabled={!Boolean(current)}
							deleteBtnonClick={handleDeleteCompany}
							showAddButton={true}
						/>

						<AppTable>
							<TableThead
								checkboxOnChange={setChecked}
								checkboxChecked={checkedAll}
								names={[
									'Название',
									'Количество сотрудников',
									'Адрес',
								]}
							/>
							<TableTbodyCompany
								items={companies}
								current={current}
								changeCurrent={changeCurrentCompany}
								checkedAll={checkedAll}
							/>
						</AppTable>
					</div>
					{hasNextPage && (
						<LoadButton onClick={loadExtraListCompanies} />
					)}
				</>
			)}
		</TableContainer>
	)
}

export default CompaniesTable
