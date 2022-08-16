import React from 'react'
import styled from 'styled-components'

type IProps = {
	label: string
	name: string
	value?: string | number
	onChange(value: { [key: string]: string }): void
	error: string | null
}

const FieldBlock = styled.div`
	width: 100%;
	height: 85px;
	position: relative;
	margin-bottom: 10px;
`
const FieldInput = styled.input`
	width: 100%;
	font-size: 18px;
	padding: 10px;
	border: 1px solid #fff;
	background: none;
	color: #fff;
	:focus-visible {
		outline: none;
	}
`
const FieldLabel = styled.label`
	font-size: 18px;
`
const FieldError = styled.p`
	font-size: 14px;
	color: #ff8a65;
`

const TextField = ({
	label,
	name,
	value,
	onChange,
	error,
	...rest
}: IProps) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
			<FieldInput
				type='text'
				id={name}
				name={name}
				onChange={(e) => handleChange(e)}
				autoComplete={name}
				value={value || ''}
				{...rest}
				style={{
					borderColor: error ? '#ff8a65' : '#fff',
					color: error ? '#ff8a65' : '#fff',
				}}
			/>

			{error && <FieldError>{error}</FieldError>}
		</FieldBlock>
	)
}

export default TextField
