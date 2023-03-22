export interface ServerResponse {
  statusCode: number
  error: boolean
  message: string
  response: Response
}

export interface Response {
  label: string
  imageUrl: string
  userId: string
  _id: string
  createdAt: Date
  updatedAt: Date
}
