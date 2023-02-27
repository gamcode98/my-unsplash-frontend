import { useEffect, useRef } from 'react'
import { ModalAction } from './../../types'

interface Props {
  modalAction: ModalAction
  children: JSX.Element | JSX.Element[]
}

const Modal = (props: Props): JSX.Element => {
  const { modalAction, children } = props

  const modalRef = useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    if (modalAction === 'open') modalRef.current?.showModal()
    if (modalAction === 'close') modalRef.current?.close()
  }, [modalAction])

  return (
    <dialog
      className='rounded-md p-8 pt-12 fixed md:w-2/4 lg:w-3/12'
      ref={modalRef}
    >{children}
    </dialog>
  )
}

export { Modal }
