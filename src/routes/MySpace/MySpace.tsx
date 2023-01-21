import { useRef, useState } from 'react'
import { DeleteImage } from '../../components/DeleteImage'
import { Images } from '../../components/Images'

const MySpace = (): JSX.Element => {
  const [imageId, setImageId] = useState<null | string>(null)

  const modalRef = useRef<HTMLDialogElement | null>(null)

  const handleOpenModal = (id: string): void => {
    modalRef.current?.showModal()
    setImageId(id)
  }

  const handleCloseModal = (): void => modalRef.current?.close()

  return (
    <div className='md:w-11/12 md:mx-auto md:gap-8 md:columns-3 mb-12'>
      <Images handleOpenModal={handleOpenModal} />
      <dialog ref={modalRef} className='rounded-md p-6 fixed md:w-2/4 lg:w-1/3'>
        <DeleteImage handleCloseModal={handleCloseModal} imageId={imageId} />
      </dialog>
    </div>
  )
}

export default MySpace
