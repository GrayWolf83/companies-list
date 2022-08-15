import { AppDispatch, RootState } from './index'
import { setLoadingError } from './error'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ICompany from '../types/Company'
import companyService from '../services/company.service'

type CompanyState = {
	entities: ICompany[]
	hasNextPage: boolean
	cursor: string
	isLoading: boolean
	dataLoaded: boolean
}

const initialState: CompanyState = {
	entities: [],
	hasNextPage: false,
	cursor: '',
	isLoading: true,
	dataLoaded: false,
}

const companySlice = createSlice({
	name: 'companies',
	initialState,
	reducers: {
		companiesLoaded(
			state,
			action: PayloadAction<{
				companies: ICompany[]
				cursor: string
				hasNextPage: boolean
			}>,
		) {
			state.entities = action.payload.companies
			state.hasNextPage = action.payload.hasNextPage
			state.cursor = action.payload.cursor
			state.dataLoaded = true
		},
		companiesExtraLoaded(
			state,
			action: PayloadAction<{
				companies: ICompany[]
				cursor: string
				hasNextPage: boolean
			}>,
		) {
			state.entities = [...state.entities, ...action.payload.companies]
			state.hasNextPage = action.payload.hasNextPage
			state.cursor = action.payload.cursor
		},
		companyLoadingStart(state) {
			state.isLoading = true
		},
		companyAdded(state, action: PayloadAction<ICompany>) {
			state.entities = [action.payload, ...state.entities]
		},
		companyDeleted(state, action: PayloadAction<{ _id: string }>) {
			state.entities = state.entities.filter(
				(item) => item._id !== action.payload._id,
			)
		},
		companyLoadingEnd(state) {
			state.isLoading = false
		},
	},
})

const {
	companiesLoaded,
	companiesExtraLoaded,
	companyLoadingStart,
	companyLoadingEnd,
	companyAdded,
	companyDeleted,
} = companySlice.actions

export const loadCompaniesList = () => async (dispatch: AppDispatch) => {
	try {
		const payload = await companyService.getList()
		dispatch(companiesLoaded(payload))
	} catch (error: any) {
		if (error?.message) {
			dispatch(setLoadingError(error.message))
		}
	} finally {
		dispatch(companyLoadingEnd())
	}
}

export const loadCompaniesExtraList =
	(cursor: string) => async (dispatch: AppDispatch) => {
		dispatch(companyLoadingStart())
		try {
			const payload = await companyService.getExtraList(cursor)
			dispatch(companiesExtraLoaded(payload))
		} catch (error: any) {
			if (error?.message) {
				dispatch(setLoadingError(error.message))
			}
		} finally {
			dispatch(companyLoadingEnd())
		}
	}

export const addCompany =
	(data: { name: string; address: string }) =>
	async (dispatch: AppDispatch) => {
		dispatch(companyLoadingStart())
		try {
			const payload = await companyService.add(data)
			dispatch(companyAdded(payload))
		} catch (error: any) {
			if (error?.message) {
				dispatch(setLoadingError(error.message))
			}
		} finally {
			dispatch(companyLoadingEnd())
		}
	}

export const deleteCompany =
	(data: string) => async (dispatch: AppDispatch) => {
		dispatch(companyLoadingStart())
		try {
			const payload = await companyService.delete(data)
			dispatch(companyDeleted(payload))
		} catch (error: any) {
			if (error?.message) {
				dispatch(setLoadingError(error.message))
			}
		} finally {
			dispatch(companyLoadingEnd())
		}
	}

export const getCompaniesList = () => (state: RootState) => {
	return state.companies.entities
}

export const getCompaniesHasNextPage = () => (state: RootState) => {
	return state.companies.hasNextPage
}

export const getCompaniesCursor = () => (state: RootState) => {
	return state.companies.cursor
}

export const getCompaniesLoadingStatus = () => (state: RootState) => {
	return state.companies.isLoading
}

export const getCompaniesDataLoadedStatus = () => (state: RootState) => {
	return state.companies.dataLoaded
}

export default companySlice.reducer
