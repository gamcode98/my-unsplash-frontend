export interface ServerResponse {
  statusCode: number
  error: boolean
  message: string
  response: Response
}

export interface Response {
  user: User
}

export interface User {
  id: string
  email: string
}
