import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import AppButton from '../ui/AppButton'

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

interface IProps {
	title: string
	addPath: string
	deleteBtnDisabled: boolean
	deleteBtnonClick: () => void
	showAddButton: boolean
}

const TableTitle = ({
	title,
	addPath,
	deleteBtnDisabled,
	deleteBtnonClick,
	showAddButton,
}: IProps) => {
	const navigate = useNavigate()

	return (
		<TitleBlock>
			<h3>{title}</h3>
			<ButtonsBlock>
				{showAddButton && (
					<AppButton onClick={() => navigate(addPath)}>
						Добавить
					</AppButton>
				)}
				<AppButton
					disabled={deleteBtnDisabled}
					onClick={deleteBtnonClick}>
					Удалить
				</AppButton>
			</ButtonsBlock>
		</TitleBlock>
	)
}

export default TableTitle
