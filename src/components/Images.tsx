/* eslint-disable react/jsx-indent */
import { IImage } from '../interfaces/IImage'
import { Image } from './Image'

interface Props {
  handleOpenModal: (param: string) => void
  images: IImage[]
}

const Images = (props: Props): JSX.Element => {
  const { handleOpenModal, images } = props

  return (
     <>
      {images.map((image) => (
        <Image
          key={image._id}
          image={image}
          handleOpenModal={handleOpenModal}
        />
      ))}
     </>

  )
}

export { Images }
