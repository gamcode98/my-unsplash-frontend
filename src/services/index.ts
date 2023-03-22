import axios from 'axios'

const getAuthorization = (): string | undefined => {
  const tokenStored = localStorage.getItem('token')
  if (tokenStored !== null) {
    const tokenParsed: string = JSON.parse(tokenStored)
    return `Bearer ${tokenParsed}`
  }
}

const getHeaders = (): any => {
  return {
    Authorization: getAuthorization()
  }
}

const backendUrl: string = import.meta.env.VITE_BACKEND_URL

const backendApi = axios.create({ baseURL: backendUrl })

export {
  getHeaders,
  backendApi,
  backendUrl
}
