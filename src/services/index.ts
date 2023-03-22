import axios from 'axios'

interface Headers {
  headers: {
    Authorization: string | undefined
  }
}

const getAuthorization = (): string | undefined => {
  const tokenStored = localStorage.getItem('token')
  if (tokenStored !== null) {
    const tokenParsed: string = JSON.parse(tokenStored)
    return `Bearer ${tokenParsed}`
  }
}

const getHeaders = (): Headers => {
  return {
    headers: {
      Authorization: getAuthorization()
    }
  }
}

const headers = {
  Authorization: getAuthorization()
}

const backendUrl: string = import.meta.env.VITE_BACKEND_URL

const backendApi = axios.create({ baseURL: backendUrl })

export {
  headers,
  getHeaders,
  backendApi,
  backendUrl
}
