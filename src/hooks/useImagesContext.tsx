import { useContext } from 'react'
import { ImagesContext } from '../context/ImagesContext'
import { Content } from '../interfaces/IImage'

interface IImagesContext {
  images: Content[] | []
  setImages: (images: Content[] | []) => void
  searchResults: Content[] | []
  setSearchResults: (images: Content[] | []) => void
}

export default (): IImagesContext => useContext(ImagesContext)
