import httpService from './http.service'

const endpoint = 'company'

const companyService = {
	getList: async () => {
		const { data } = await httpService.get(endpoint)
		return data
	},
	getExtraList: async (cursor: string) => {
		const { data } = await httpService.get(endpoint + '?cursor=' + cursor)
		return data
	},
	add: async (payload: { name: string; address: string }) => {
		const { data } = await httpService.post(endpoint, payload)
		return data
	},
	delete: async (id: string) => {
		const { data } = await httpService.delete(endpoint + '/' + id)
		console.log('delete data', data)

		return data
	},
}

export default companyService
