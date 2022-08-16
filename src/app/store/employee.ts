import { AppDispatch, RootState } from './index'
import { setLoadingError } from './error'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import IEmployee from '../types/Employee'
import employeeService from '../services/employee.service'
import { changeCompany } from './company'

type CompanyState = {
	entities: IEmployee[]
	currentCompany: string
	hasNextPage: boolean
	cursor: string
	isLoading: boolean
}

const initialState: CompanyState = {
	entities: [],
	currentCompany: '',
	hasNextPage: false,
	cursor: '',
	isLoading: false,
}

const employeeSlice = createSlice({
	name: 'employees',
	initialState,
	reducers: {
		employeesLoaded(
			state,
			action: PayloadAction<{
				employees: IEmployee[]
				cursor: string
				hasNextPage: boolean
			}>,
		) {
			state.entities = action.payload.employees
			state.hasNextPage = action.payload.hasNextPage
			state.cursor = action.payload.cursor
		},
		employeesListCleared(state) {
			state.entities = []
			state.currentCompany = ''
			state.cursor = ''
			state.hasNextPage = false
		},
		employeeExtraLoaded(
			state,
			action: PayloadAction<{
				employees: IEmployee[]
				cursor: string
				hasNextPage: boolean
			}>,
		) {
			state.entities = [...state.entities, ...action.payload.employees]
			state.hasNextPage = action.payload.hasNextPage
			state.cursor = action.payload.cursor
		},
		employeeLoadingStart(state) {
			state.isLoading = true
		},
		employeeAdded(state, action: PayloadAction<IEmployee>) {
			state.entities = [action.payload, ...state.entities]
		},
		employeeDeleted(state, action: PayloadAction<string>) {
			state.entities = state.entities.filter(
				(item) => item._id !== action.payload,
			)
		},
		employeeCurrentCompanyChanged(state, action: PayloadAction<string>) {
			state.currentCompany = action.payload
		},
		employeeLoadingEnd(state) {
			state.isLoading = false
		},
	},
})

const {
	employeesLoaded,
	employeeExtraLoaded,
	employeeLoadingStart,
	employeeDeleted,
	employeeLoadingEnd,
	employeesListCleared,
	employeeAdded,
	employeeCurrentCompanyChanged,
} = employeeSlice.actions

export const loadEmployeesList =
	(company: string) => async (dispatch: AppDispatch) => {
		dispatch(employeeLoadingStart())
		try {
			const payload = await employeeService.getList(company)
			dispatch(employeesLoaded(payload))
		} catch (error: any) {
			dispatch(setLoadingError(error))
		} finally {
			dispatch(employeeLoadingEnd())
		}
	}

export const loadEmployeesExtraList =
	(company: string, cursor: string) => async (dispatch: AppDispatch) => {
		dispatch(employeeLoadingStart())
		try {
			const payload = await employeeService.getExtraList(company, cursor)
			dispatch(employeeExtraLoaded(payload))
		} catch (error: any) {
			dispatch(setLoadingError(error))
		} finally {
			dispatch(employeeLoadingEnd())
		}
	}

export const addEmployee =
	(data: {
		firstName: string
		lastName: string
		position: string
		company: string
	}) =>
	async (dispatch: AppDispatch) => {
		dispatch(employeeLoadingStart())
		try {
			const payload = await employeeService.add(data)
			dispatch(employeeAdded(payload))
			dispatch(changeCompany({ _id: payload.company, inc: 1 }))
		} catch (error: any) {
			dispatch(setLoadingError(error))
		} finally {
			dispatch(employeeLoadingEnd())
		}
	}

export const deleteEmployee =
	(data: string) => async (dispatch: AppDispatch) => {
		dispatch(employeeLoadingStart())
		try {
			const payload = await employeeService.delete(data)
			dispatch(employeeDeleted(payload._id))
			dispatch(changeCompany({ _id: payload.company, inc: -1 }))
		} catch (error: any) {
			dispatch(setLoadingError(error))
		} finally {
			dispatch(employeeLoadingEnd())
		}
	}

export const clearEmployeesList = () => async (dispatch: AppDispatch) => {
	dispatch(employeesListCleared())
}

export const setEmployeesCurrentCompany =
	(company: string) => async (dispatch: AppDispatch) => {
		dispatch(employeeCurrentCompanyChanged(company))
	}

export const getEmployeesList = () => (state: RootState) => {
	return state.employees.entities
}

export const getEmployeesHasNextPage = () => (state: RootState) => {
	return state.employees.hasNextPage
}

export const getEmployeesCurrentCompany = () => (state: RootState) => {
	return state.employees.currentCompany
}

export const getEmployeesCursor = () => (state: RootState) => {
	return state.employees.cursor
}

export const getEmployeesLoadingStatus = () => (state: RootState) => {
	return state.employees.isLoading
}

export default employeeSlice.reducer
