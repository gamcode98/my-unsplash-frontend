import { AxiosResponse } from 'axios'
import { backendApi, getHeaders } from '.'

const post = async <T, U>(url: string, data?: T): Promise<AxiosResponse<U>> => {
  return await
  backendApi.post(url, data, getHeaders())
}

const patch = async <T, U>(url: string, data?: T): Promise<AxiosResponse<U>> => {
  return await
  backendApi.patch(url, data, getHeaders())
}

const get = async <T>(url: string): Promise<AxiosResponse<T>> => {
  return await
  backendApi.get(url, getHeaders())
}

export { post, patch, get }
