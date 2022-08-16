import React, { useState, useCallback, useEffect } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import AppButton from '../../ui/AppButton'

interface IProps {
	initialData?: { [key: string]: string }
	onSubmit: (data: { [key: string]: string }) => void
	btnLabel: string
	children: React.ReactNode
	validationShema: any
}

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 60%;
	margin: 15px auto;
	@media (max-width: 992px) {
		width: 80%;
	}
	@media (max-width: 580px) {
		width: 95%;
	}
`

const FormComponent = ({
	initialData,
	onSubmit,
	btnLabel,
	children,
	validationShema,
}: IProps) => {
	const [data, setData] = useState<{ [key: string]: string }>({})
	const [error, setError] = useState<{ [key: string]: string }>({})

	const validation = useCallback(() => {
		validationShema
			.validate(data)
			.then(() => setError({}))
			.catch((err: { message: { name: string; text: string } }) =>
				setError({ [err.message.name]: err.message.text }),
			)
	}, [validationShema, data])

	useEffect(() => {
		if (initialData) {
			setData(initialData)
		}

		return () => setData({})
	}, [initialData])

	useEffect(() => {
		if (Object.keys(data).length) validation()
	}, [data, validation])

	const changeHandler = (value: { [key: string]: string }) => {
		setData((prevState) => ({
			...prevState,
			...value,
		}))
	}

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		validation()
		if (!Object.keys(error).length && Object.keys(data).length) {
			onSubmit(data)
		} else {
			toast.warning('Заполните все поля формы')
		}
	}

	return (
		<Form onSubmit={submitHandler}>
			{React.Children.map(children, (child: any) => {
				const config = {
					...child.props,
					onChange: changeHandler,
					value: data[child.props.name],
					error: error[child?.props?.name],
				}

				return React.cloneElement(child, config)
			})}

			<AppButton type='submit'>{btnLabel}</AppButton>
		</Form>
	)
}

export default FormComponent
