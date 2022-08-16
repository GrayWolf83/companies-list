import React from 'react'
import IEmployee from '../../types/Employee'
import TableTrEmployeeItem from './TableTrEmployeeItem'

interface IProps {
	items: IEmployee[]
	current: string
	checkedAll: boolean
	changeCurrent: (id: string) => void
}

const TableTbodyEmployee = ({
	items,
	current,
	checkedAll,
	changeCurrent,
}: IProps) => {
	return (
		<tbody>
			{items.map((item) => (
				<TableTrEmployeeItem
					key={item._id}
					item={item}
					current={current}
					changeCurrent={changeCurrent}
					checkedAll={checkedAll}
				/>
			))}
		</tbody>
	)
}

export default TableTbodyEmployee
