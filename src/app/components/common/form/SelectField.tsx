import React from 'react'
import styled from 'styled-components'

type IProps = {
	items: { id: string; name: string }[]
	onChange: (data: { [key: string]: string }) => void
	name: string
	label: string
	defaultLabel?: string
	error: string | null
	value: string
}

const FieldBlock = styled.div`
	width: 100%;
	height: 85px;
	position: relative;
	margin-bottom: 10px;
`

const FieldLabel = styled.label`
	font-size: 18px;
`

const Select = styled.select`
	width: 100%;
	font-size: 18px;
	padding: 10px;
	border: 1px solid var(--main-color);
	color: var(--main-color);
	:focus-visible {
		outline: none;
	}
`
const Option = styled.option``
const FieldError = styled.p`
	font-size: 14px;
	color: var(--red-color);
`

const SelectField = ({
	items,
	onChange,
	name,
	label,
	defaultLabel,
	error,
	value,
}: IProps) => {
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChange({ [e.target.name]: e.target.value })
	}

	return (
		<FieldBlock>
			<FieldLabel
				htmlFor={name}
				style={{
					color: error ? '#ff8a65' : '#fff',
				}}>
				{label}
			</FieldLabel>
			<Select
				name={name}
				id={name}
				onChange={handleChange}
				value={value}
				style={{
					borderColor: error ? '#ff8a65' : '#fff',
					color: error ? '#ff8a65' : '#fff',
				}}>
				{defaultLabel && <Option value={''}>{defaultLabel}</Option>}
				{items.map((item) => (
					<Option value={item.id} key={item.id}>
						{item.name}
					</Option>
				))}
			</Select>
			{error && <FieldError>{error}</FieldError>}
		</FieldBlock>
	)
}

export default SelectField
