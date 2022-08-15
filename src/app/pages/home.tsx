import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import CompaniesTable from '../components/common/CompaniesTable'
import AppButton from '../components/ui/AppButton'
import TableContainer from '../components/ui/TableContainer'

const HomeInner = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`
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

const Table = styled.table`
	width: 100%;
	margin-bottom: 10px;
`

const Home = () => {
	const navigate = useNavigate()

	return (
		<HomeInner>
			<CompaniesTable />
			<TableContainer>
				<div>
					<TitleBlock>
						<h3>Сотрудники</h3>
						<ButtonsBlock>
							<AppButton
								onClick={() => navigate('/add-employee')}>
								Добавить
							</AppButton>
							<AppButton disabled={true}>Удалить</AppButton>
						</ButtonsBlock>
					</TitleBlock>
					<Table>
						<thead>
							<tr>
								<th scope='col'>
									<input type='checkbox' />
								</th>
								<th align='left' scope='col'>
									Имя
								</th>
								<th align='left' scope='col'>
									Фамилия
								</th>
								<th align='left' scope='col'>
									Должность
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope='row'>1</th>
								<td>Mark</td>
								<td>Otto</td>
								<td>@mdo</td>
							</tr>
						</tbody>
					</Table>
				</div>
				<TableButton>
					<AppButton disabled={true}>Загрузить еще</AppButton>
				</TableButton>
			</TableContainer>
		</HomeInner>
	)
}

export default Home
