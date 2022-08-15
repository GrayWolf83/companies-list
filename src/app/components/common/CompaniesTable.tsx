import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../hooks/useAppReduxHooks'
import {
	deleteCompany,
	getCompaniesCursor,
	getCompaniesHasNextPage,
	getCompaniesList,
	getCompaniesLoadingStatus,
	loadCompaniesExtraList,
} from '../../store/company'
import AppButton from '../ui/AppButton'
import AppTable from '../ui/AppTable'
import Loader from '../ui/Loader'
import TableContainer from '../ui/TableContainer'

const TitleBlock = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`
const ButtonsBlock = styled.div`
	display: flex;
	justify-content: flex-end;

	* {
		margin-left: 10px;
	}
`
const TableButton = styled.div`
	bottom: 5px;
	left: 5px;
	z-index: 3;
`

const TableTr = styled.tr`
	cursor: pointer;

	:hover {
		color: #ff8a65;
	}

	&.active {
		color: #fa6334;
	}
`

const CompaniesTable = () => {
	const [currentCompany, setCurrentCompany] = useState('')
	const [checkedAll, setChecked] = useState(false)
	const dispatch = useAppDispatch()
	const companies = useAppSelector(getCompaniesList())
	const companyLoading = useAppSelector(getCompaniesLoadingStatus())
	const hasNextPage = useAppSelector(getCompaniesHasNextPage())
	const cursorCompanies = useAppSelector(getCompaniesCursor())
	const navigate = useNavigate()

	const changeCurrentCompany = (id: string) => {
		if (currentCompany === id) {
			setCurrentCompany('')
		} else {
			setCurrentCompany(id)
		}
	}

	const changeChecked = () => {
		if (checkedAll) {
			setChecked(false)
		} else {
			setChecked(true)
		}
	}

	const handleDeleteCompany = () => {
		dispatch(deleteCompany(currentCompany))
		setCurrentCompany('')
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
						<TitleBlock>
							<h3>Компании</h3>
							<ButtonsBlock>
								<AppButton
									onClick={() => navigate('/add-company')}>
									Добавить
								</AppButton>
								<AppButton
									disabled={!Boolean(currentCompany)}
									onClick={handleDeleteCompany}>
									Удалить
								</AppButton>
							</ButtonsBlock>
						</TitleBlock>

						<AppTable>
							<thead>
								<tr>
									<th scope='col'>
										<input
											type='checkbox'
											onChange={changeChecked}
											checked={checkedAll}
										/>
									</th>
									<th align='left' scope='col'>
										Название
									</th>
									<th align='left' scope='col'>
										Количество
										<br /> сотрудников
									</th>
									<th align='left' scope='col'>
										Адрес
									</th>
								</tr>
							</thead>
							<tbody>
								{companies.map((company) => (
									<TableTr
										className={
											currentCompany === company._id
												? 'active'
												: ''
										}
										key={company._id}
										onClick={() =>
											changeCurrentCompany(company._id)
										}>
										<th scope='row'>
											<input
												type='checkbox'
												onChange={() =>
													changeCurrentCompany(
														company._id,
													)
												}
												checked={
													currentCompany ===
														company._id ||
													checkedAll
												}
											/>
										</th>
										<td>{company.name}</td>
										<td>{company.employeesCount}</td>
										<td>{company.address}</td>
									</TableTr>
								))}
							</tbody>
						</AppTable>
					</div>
					{hasNextPage && (
						<TableButton>
							<AppButton onClick={loadExtraListCompanies}>
								Загрузить еще
							</AppButton>
						</TableButton>
					)}
				</>
			)}
		</TableContainer>
	)
}

export default CompaniesTable
