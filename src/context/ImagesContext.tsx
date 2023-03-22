import { createContext, useState } from 'react'
import { Content } from '../interfaces/IImage'

interface IImagesContext {
  images: Content[] | []
  setImages: (images: Content[] | []) => void
  searchResults: Content[] | []
  setSearchResults: (images: Content[] | []) => void
}
export const ImagesContext = createContext<IImagesContext>({
  images: [],
  setImages: () => { },
  searchResults: [],
  setSearchResults: () => { }
})

export const ImagesProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
  const [images, setImages] = useState<Content[]>([])
  const [searchResults, setSearchResults] = useState<Content[] >([])

  const value: IImagesContext = { images, setImages, searchResults, setSearchResults }

  return <ImagesContext.Provider value={value}>{children}</ImagesContext.Provider>
}
