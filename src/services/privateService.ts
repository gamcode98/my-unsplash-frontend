/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { AxiosResponse } from 'axios'
import { backendApi, getHeaders, headers } from '.'

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

const remove = async <T, U>(url: string, data: T): Promise<AxiosResponse<U>> => {
  return await
  backendApi.delete(url, { headers, data })
}

export { post, patch, get, remove }
