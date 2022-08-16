import React from 'react'
import styled from 'styled-components'
import IEmployee from '../../types/Employee'

const TableTr = styled.tr`
	cursor: pointer;

	:hover {
		color: #ff8a65;
	}

	&.active {
		color: #fa6334;
	}
`

interface IProps {
	item: IEmployee
	current: string
	checkedAll: boolean
	changeCurrent: (id: string) => void
}

const TableTrEmployeeItem = ({
	item,
	current,
	checkedAll,
	changeCurrent,
}: IProps) => {
	return (
		<TableTr
			key={item._id}
			className={current === item._id ? 'active' : ''}
			onClick={() => changeCurrent(item._id)}>
			<th scope='row'>
				<input
					type='checkbox'
					onChange={() => changeCurrent(item._id)}
					checked={current === item._id || checkedAll}
				/>
			</th>
			<td>{item.firstName}</td>
			<td>{item.lastName}</td>
			<td>{item.position}</td>
		</TableTr>
	)
}

export default TableTrEmployeeItem
