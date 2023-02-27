/* eslint-disable react/jsx-indent */
import { IImage } from '../../interfaces/IImage'
import { Image } from '../Image'
import { ImageNotFound } from '../ImageNotFound'

interface Props {
  handleOpenModal: (param: string) => void
  searchResults: IImage[]
}

const Images = (props: Props): JSX.Element => {
  const { handleOpenModal, searchResults } = props

  return (
    <>
      {searchResults.length === 0
        ? <ImageNotFound />
        : <>
          {searchResults.map((image) => (
            <Image
              key={image._id}
              image={image}
              handleOpenModal={handleOpenModal}
            />
          ))}
          </>}
    </>

  )
}

export { Images }
