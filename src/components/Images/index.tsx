/* eslint-disable react/jsx-indent */
import useImagesContext from '../../hooks/useImagesContext'
import { Image } from '../Image'
import { ImageNotFound } from '../ImageNotFound'

interface Props {
  handleOpenModal: (param: string) => void
}

const Images = (props: Props): JSX.Element => {
  const { handleOpenModal } = props

  const { searchResults } = useImagesContext()

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
