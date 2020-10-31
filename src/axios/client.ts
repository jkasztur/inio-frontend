import Axios, { AxiosInstance } from "axios";

let client: AxiosInstance

export function getAxios(): AxiosInstance {
	if (!client) {
		client = Axios.create({
			baseURL: process.env.REACT_APP_SERVER_HOST
		})
	}
	return client
}
