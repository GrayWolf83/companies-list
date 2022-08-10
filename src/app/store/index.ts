import { configureStore } from '@reduxjs/toolkit'
import errorsReducer from './error'
import companyReducer from './company'

const store = configureStore({
	reducer: {
		errors: errorsReducer,
		companies: companyReducer,
	},
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
