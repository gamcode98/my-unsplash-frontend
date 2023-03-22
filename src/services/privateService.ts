import { AxiosResponse } from 'axios'
import { backendApi, headers } from '.'

const post = async <T, U>(url: string, data?: T): Promise<AxiosResponse<U>> => {
  return await
  backendApi.post(url, data, { headers })
}

const patch = async <T, U>(url: string, data?: T): Promise<AxiosResponse<U>> => {
  return await
  backendApi.patch(url, data, { headers })
}

const get = async <T>(url: string): Promise<AxiosResponse<T>> => {
  return await
  backendApi.get(url, { headers })
}

const remove = async <T, U>(url: string, data: T): Promise<AxiosResponse<U>> => {
  return await
  backendApi.delete(url, { headers, data })
}

export { post, patch, get, remove }
