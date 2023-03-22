import { useRef, useState } from 'react'
import logoIconDesktop from './../../assets/my-unsplash-logo-desktop.svg'
import logoIconMobile from './../../assets/my-unsplash-logo-mobile.svg'
import { Outlet, useLocation } from 'react-router-dom'
import { AddImage } from '../../components/AddImage'
import { IAlert } from '../../interfaces/IAlert'
import { Search } from '../../components/Search'
import { GetStarted } from '../../components/GetStarted'
import useCurrentUser from '../../hooks/useCurrentUser'
import { UserActions } from '../../components/UserActions'
import { Modal } from '../../components/Modal'
import { ModalAction } from '../../types'
import { ROUTES } from '../../enums/routes'
import useImagesContext from '../../hooks/useImagesContext'

interface Props {
  setAlert: React.Dispatch<React.SetStateAction<IAlert>>
}

const Navigation = (props: Props): JSX.Element => {
  const { setAlert } = props

  const { images, setImages, setSearchResults } = useImagesContext()

  const location = useLocation()

  const currentUrl = location.pathname

  const [loginIsPressed, setLoginIsPressed] = useState<boolean>(false)
  const [modalAction, setModalAction] = useState<ModalAction>(null)

  const { currentUser } = useCurrentUser()

  const modalAddImage = useRef<HTMLDialogElement | null>(null)

  const handleOpenModalAddImage = (): void => {
    modalAddImage.current?.showModal()
  }

  const handleOpenModalToLogin = (isPressed?: boolean): void => {
    if (isPressed) {
      setLoginIsPressed(isPressed)
      setModalAction('open')
    }
  }

  const handleCloseModalAddImage = (): void => modalAddImage.current?.close()

  return (
    <>
      <header className='w-11/12 mx-auto pt-2 mb-8 relative z-10'>
        <nav className='flex justify-between items-center relative'>
          <div className='flex gap-4 items-center'>
            <picture>
              <source media='(min-width:1024px )' srcSet={logoIconDesktop} />
              <source media='(min-width:375px )' srcSet={logoIconMobile} />
              <img src={logoIconMobile} />
            </picture>
            {currentUser !== null && currentUrl !== ROUTES.SETTINGS &&
              <Search images={images} setSearchResults={setSearchResults} />}
          </div>

          <div className='flex gap-8'>
            {currentUser !== null && currentUrl !== ROUTES.SETTINGS &&
              <button
                className='hidden md:block bg-green text-white px-4 py-2 rounded-lg mb-2 lg:mb-0 hover:-translate-y-0.5 ease-linear duration-100 will-change-transform'
                onClick={handleOpenModalAddImage}
              >Add a photo
              </button>}

            {currentUser !== null &&
              <UserActions handleOpenModalAddImage={handleOpenModalAddImage} />}

            {currentUser === null &&
              <button className='hidden md:block hover:border-b-2 cursor-pointer' onClick={() => handleOpenModalToLogin(true)}>
                Log in
              </button>}

            {currentUser === null &&
              <button
                className='hidden md:block bg-green text-white font-bold px-4 py-2 rounded-lg mx-auto lg:mx-0 lg:px-8 hover:-translate-y-0.5 ease-linear duration-100 will-change-transform'
                onClick={() => setModalAction('open')}
              >Get started
              </button>}
          </div>

        </nav>
      </header>

      <Modal modalAction={modalAction}>
        <GetStarted
          loginIsPressed={loginIsPressed}
          setModalAction={setModalAction}
          setAlert={setAlert}
        />
      </Modal>

      <dialog ref={modalAddImage} className='rounded-md p-6 fixed md:w-2/4 lg:w-1/3'>
        <AddImage
          handleCloseModal={handleCloseModalAddImage}
          setAlert={setAlert}
          images={images}
          setImages={setImages}
        />
      </dialog>

      <Outlet />
    </>
  )
}

export { Navigation }
