export interface IImage {
  _id: string
  label: string
  photoUrl: string
}

export interface ServerResponse {
  statusCode: number
  error: boolean
  message: string
  response: Response
}

export interface Response {
  content: Content[]
  prevPage: string
  nextPage: string
}

export interface Content {
  _id: string
  label: string
  imageUrl: string
  userId: string
  createdAt: Date
  updatedAt: Date
}
