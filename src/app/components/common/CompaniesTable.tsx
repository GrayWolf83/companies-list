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
	const [current, setCurrent] = useState<string[]>([])
	const currentCompany = useAppSelector(getEmployeesCurrentCompany())
	const [checkedAll, setChecked] = useState(false)
	const dispatch = useAppDispatch()
	const companies = useAppSelector(getCompaniesList())
	const companyLoading = useAppSelector(getCompaniesLoadingStatus())
	const hasNextPage = useAppSelector(getCompaniesHasNextPage())
	const cursorCompanies = useAppSelector(getCompaniesCursor())

	useEffect(() => {
		setCurrent([currentCompany])
	}, [])

	useEffect(() => {
		checkedAll
			? setCurrent(companies.map((item) => item._id))
			: setCurrent([])
	}, [checkedAll, companies])

	const changeCurrentCompany = (id: string) => {
		if (current.includes(id)) {
			setCurrent(current.filter((item) => item !== id))
			dispatch(clearEmployeesList())
		} else {
			setCurrent((prev) => [...prev, id])
			dispatch(setEmployeesCurrentCompany(id))
			dispatch(loadEmployeesList(id))
		}
	}

	const handleDeleteCompany = () => {
		current.forEach((item) => {
			dispatch(deleteCompany(item))
		})

		setCurrent([])
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
