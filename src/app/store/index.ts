import { configureStore } from '@reduxjs/toolkit'
import errorsReducer from './error'
import companyReducer from './company'
import employeeReducer from './employee'

const store = configureStore({
	reducer: {
		errors: errorsReducer,
		companies: companyReducer,
		employees: employeeReducer,
	},
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
