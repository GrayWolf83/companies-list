import { AppDispatch, RootState } from './index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type errorState = {
	error: string | null
}

const initialState: errorState = {
	error: null,
}

const errorSlice = createSlice({
	name: 'errors',
	initialState,
	reducers: {
		loadingError(state, action: PayloadAction<string>) {
			state.error = action.payload
		},
		errorCleared(state) {
			state.error = null
		},
	},
})

const { loadingError, errorCleared } = errorSlice.actions

export const setLoadingError =
	(error: string) => async (dispatch: AppDispatch) => {
		dispatch(loadingError(error))
	}

export const clearErrors = () => (dispatch: AppDispatch) => {
	dispatch(errorCleared())
}

export const getError = () => (state: RootState) => {
	return state.errors.error
}

export default errorSlice.reducer
