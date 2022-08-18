import React from 'react'
import ICompany from '../../types/Company'
import TableTrCompanyItem from './TableTrCompany'

interface IProps {
	items: ICompany[]
	current: string[]
	changeCurrent: (id: string) => void
}

const TableTbodyCompany = ({ items, current, changeCurrent }: IProps) => {
	return (
		<tbody>
			{items.map((item) => (
				<TableTrCompanyItem
					key={item._id}
					item={item}
					current={current}
					changeCurrent={changeCurrent}
				/>
			))}
		</tbody>
	)
}

export default TableTbodyCompany
