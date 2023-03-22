import { AxiosResponse } from 'axios'
import { backendApi } from '.'

type AuthUrl = '/auth/login'
| '/auth/register' |
'/auth/recovery' |
'/auth/change-password'

const post = async <T, U>(url: AuthUrl, data: T): Promise<AxiosResponse<U>> => {
  return await
  backendApi.post(url, data)
}

export { post }
