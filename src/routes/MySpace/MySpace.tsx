import { useEffect, useRef, useState } from 'react'
import { Alert } from '../../components/Alert'
import { DeleteImage } from '../../components/DeleteImage'
import { Images } from '../../components/Images'
import { ImagesSkeleton } from '../../components/ImagesSkeleton'
import { IImage } from '../../interfaces/IImage'

const fakeImages: IImage[] = [
  {
    _id: crypto.randomUUID(),
    url: 'https://picsum.photos/600/500?random=1',
    label: 'A random image 1'
  },
  {
    _id: crypto.randomUUID(),
    url: 'https://picsum.photos/800/400?random=2',
    label: 'A random image 2'
  },
  {
    _id: crypto.randomUUID(),
    url: 'https://picsum.photos/400/400?random=3',
    label: 'A random image 3'
  },
  {
    _id: crypto.randomUUID(),
    url: 'https://picsum.photos/900/700?random=4',
    label: 'A random image 4'
  },
  {
    _id: crypto.randomUUID(),
    url: 'https://picsum.photos/500/700?random=5',
    label: 'A random image 5'
  },
  {
    _id: crypto.randomUUID(),
    url: 'https://picsum.photos/500/800?random=6',
    label: 'A random image 6'
  }
]

type Status = 'success' | 'error'

interface IAlert {
  show: boolean
  status: Status
  message: string
}

const MySpace = (): JSX.Element => {
  const [images, setImages] = useState<IImage[]>(fakeImages)
  const [imageId, setImageId] = useState<null | string>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [alert, setAlert] = useState<IAlert>({
    show: false,
    status: 'success',
    message: ''
  })

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
