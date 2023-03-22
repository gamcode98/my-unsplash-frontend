export interface ServerResponse {
  statusCode: number
  error: boolean
  message: string
  response: Response
}

interface Response {
  user: User
  token: string
}

interface User {
  id: string
  email: string
}
