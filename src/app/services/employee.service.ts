import httpService from './http.service'

const endpoint = 'employee'

const employeeService = {
	getList: async (company: string) => {
		const { data } = await httpService.get(endpoint + '/' + company)
		return data
	},
	getExtraList: async (company: string, cursor: string) => {
		const { data } = await httpService.get(
			endpoint + '/' + company + '?cursor=' + cursor,
		)
		return data
	},
	add: async (payload: {
		firstName: string
		lastName: string
		position: string
		company: string
	}) => {
		const { data } = await httpService.post(endpoint, payload)
		return data
	},
	delete: async (id: string) => {
		const { data } = await httpService.delete(endpoint + '/' + id)
		return data
	},
}

export default employeeService
