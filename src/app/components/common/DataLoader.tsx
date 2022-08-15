import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useAppReduxHooks'
import {
	getCompaniesDataLoadedStatus,
	getCompaniesLoadingStatus,
	loadCompaniesList,
} from '../../store/company'
import Loader from '../ui/Loader'

interface IProps {
	children: React.ReactNode
}

const DataLoader = ({ children }: IProps) => {
	const dispatch = useAppDispatch()
	const dataLoaded = useAppSelector(getCompaniesDataLoadedStatus())
	const isCompanyLoading = useAppSelector(getCompaniesLoadingStatus())

	useEffect(() => {
		if (!dataLoaded) {
			dispatch(loadCompaniesList())
		}
	}, [dataLoaded, dispatch])

	return <>{isCompanyLoading && !dataLoaded ? <Loader /> : children}</>
}

export default DataLoader
