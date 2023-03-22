import { useEffect, useRef, useState } from 'react'
import { Alert } from '../../components/Alert'
import { DeleteImage } from '../../components/DeleteImage'
import { Images } from '../../components/Images'
import { ImagesSkeleton } from '../../components/ImagesSkeleton'
import useImagesContext from '../../hooks/useImagesContext'
import { IAlert } from '../../interfaces/IAlert'
import { ServerResponse } from '../../interfaces/IImage'
import { get } from '../../services/privateService'

interface Props {
  alert: IAlert
  setAlert: React.Dispatch<React.SetStateAction<IAlert>>
}

const MySpace = (props: Props): JSX.Element => {
  const { alert, setAlert } = props

  const { setImages, setSearchResults } = useImagesContext()

  const [imageId, setImageId] = useState<null | string>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    get<ServerResponse>('/images/?limit=10&offset=0')
      .then(({ data }) => {
        const { response: { content } } = data
        setImages(content)
        setSearchResults(content)
      })
      .catch(error => {
        setAlert?.({
          message: error.response?.data?.message ?? 'Something went wrong',
          status: 'error',
          show: true
        })
      })
      .finally(() => setIsLoading(false))
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
          : <Images handleOpenModal={handleOpenModal} />
      }
      <dialog ref={modalRef} className='rounded-md p-6 fixed md:w-2/4 lg:w-1/3'>
        <DeleteImage
          handleCloseModal={handleCloseModal}
          imageId={imageId}
          setAlert={setAlert}
        />
      </dialog>
      <Alert alert={alert} setAlert={setAlert} />
    </div>
  )
}

export default MySpace
