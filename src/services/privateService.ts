/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { AxiosResponse } from 'axios'
import { backendApi, getHeaders } from '.'

const post = async <T, U>(url: string, data?: T): Promise<AxiosResponse<U>> => {
  return await
  backendApi.post(url, data, { headers: getHeaders() })
}

const patch = async <T, U>(url: string, data?: T): Promise<AxiosResponse<U>> => {
  return await
  backendApi.patch(url, data, { headers: getHeaders() })
}

const get = async <T>(url: string): Promise<AxiosResponse<T>> => {
  return await
  backendApi.get(url, { headers: getHeaders() })
}

const remove = async <T, U>(url: string, data?: T): Promise<AxiosResponse<U>> => {
  return await
  backendApi.delete(url, { headers: getHeaders(), data })
}

export { post, patch, get, remove }
