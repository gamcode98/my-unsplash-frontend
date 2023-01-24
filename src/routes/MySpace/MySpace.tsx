import { useEffect, useRef, useState } from 'react'
import { Alert } from '../../components/Alert'
import { DeleteImage } from '../../components/DeleteImage'
import { Images } from '../../components/Images'
import { ImagesSkeleton } from '../../components/ImagesSkeleton'
import { IAlert } from '../../interfaces/IAlert'
import { IImage } from '../../interfaces/IImage'

interface Props {
  alert: IAlert
  setAlert: React.Dispatch<React.SetStateAction<IAlert>>
  images: IImage[]
  setImages: React.Dispatch<React.SetStateAction<IImage[]>>
}

const MySpace = (props: Props): JSX.Element => {
  const { alert, setAlert, images, setImages } = props

  const [imageId, setImageId] = useState<null | string>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  const modalRef = useRef<HTMLDialogElement | null>(null)

  const handleOpenModal = (id: string): void => {
    modalRef.current?.showModal()
    setImageId(id)
  }

  const handleCloseModal = (): void => modalRef.current?.close()

  return (
    <div className='md:w-11/12 md:mx-auto md:gap-8 md:columns-3 mb-12'>
      {
        isLoading
          ? <ImagesSkeleton />
          : <Images handleOpenModal={handleOpenModal} images={images} />
      }
      <dialog ref={modalRef} className='rounded-md p-6 fixed md:w-2/4 lg:w-1/3'>
        <DeleteImage
          handleCloseModal={handleCloseModal}
          imageId={imageId}
          setAlert={setAlert}
          images={images}
          setImages={setImages}
        />
      </dialog>
      <Alert alert={alert} setAlert={setAlert} />
    </div>
  )
}

export default MySpace
