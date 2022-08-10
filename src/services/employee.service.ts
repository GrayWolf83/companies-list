import httpService from './http.service'

const endpoint = 'employee'

const employeeService = {
	getList: async () => {
		const { data } = await httpService.get(endpoint)
		return data
	},
	getExtraList: async (cursor: string) => {
		const { data } = await httpService.get(endpoint + '?cursor=' + cursor)
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
