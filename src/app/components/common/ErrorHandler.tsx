import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '../../hooks/useAppReduxHooks'
import { clearErrors, getError } from '../../store/error'

interface IProps {
	children: React.ReactNode
}

const ErrorHandler = ({ children }: IProps) => {
	const error = useAppSelector(getError())
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (error) {
			toast.error(error)
			dispatch(clearErrors())
		}
	})

	return <>{children}</>
}

export default ErrorHandler
