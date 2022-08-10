import axios from 'axios'
import config from '../../config.json'

const http = axios.create({
	baseURL: config.API_ENDPOINT,
})

const httpService = {
	get: http.get,
	post: http.post,
	delete: http.delete,
}

export default httpService
