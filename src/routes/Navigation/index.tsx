import logoIconDesktop from './../../assets/my-unsplash-logo-desktop.svg'
import logoIconMobile from './../../assets/my-unsplash-logo-mobile.svg'
import barsIcon from './../../assets/bars.svg'
import xMarkIcon from './../../assets/x-mark.svg'
import { useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { AddImage } from '../../components/AddImage'
import { IAlert } from '../../interfaces/IAlert'
import { IImage } from '../../interfaces/IImage'
import { Search } from '../../components/Search'
import { GetStarted } from '../../components/GetStarted'
import useCurrentUser from '../../hooks/useCurrentUser'
import { UserActions } from '../../components/UserActions'
import { Modal } from '../../components/Modal'
import { ModalAction } from '../../types'

interface Props {
  setAlert: React.Dispatch<React.SetStateAction<IAlert>>
  images: IImage[]
  setImages: React.Dispatch<React.SetStateAction<IImage[]>>
  setSearchResults: React.Dispatch<React.SetStateAction<IImage[]>>
}

const Navigation = (props: Props): JSX.Element => {
  const { setAlert, images, setImages, setSearchResults } = props

  const [showMenu, setShowMenu] = useState<boolean>(false)
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
            {currentUser !== null &&
              <Search images={images} setSearchResults={setSearchResults} />}
          </div>
          <button onClick={() => setShowMenu(!showMenu)} className='outline-none lg:hidden'>
            <img src={showMenu ? xMarkIcon : barsIcon} width={30} />
          </button>
          <ul className={`absolute left-0 right-0 top-16 bg-white shadow-md p-4 flex flex-col items-center ${showMenu ? 'translate-x-0' : '-translate-x-[120%] md:-translate-x-[150%]'} ease-in duration-300 
        md:w-3/5 md:mx-auto lg:static lg:translate-x-0 lg:flex-row lg:gap-6 lg:w-auto lg:mx-0 lg:shadow-none`}
          >
            {currentUser !== null &&
              <button
                className='bg-green text-white px-4 py-2 rounded-lg mb-2 lg:mb-0 hover:-translate-y-0.5 ease-linear duration-100 will-change-transform'
                onClick={handleOpenModalAddImage}
              >Add a photo
              </button>}

            {currentUser !== null && <UserActions />}

            {currentUser === null &&
              <li className='hover:border-b-2 cursor-pointer' onClick={() => handleOpenModalToLogin(true)}>
                <span>Log in</span>
              </li>}

            {currentUser === null &&
              <button
                className='bg-green text-white font-bold px-4 py-2 rounded-lg block mx-auto lg:mx-0 lg:px-8 hover:-translate-y-0.5 ease-linear duration-100 will-change-transform'
                onClick={() => setModalAction('open')}
              >Get started
              </button>}

          </ul>
        </nav>
      </header>

      <Modal modalAction={modalAction}>
        <GetStarted
          loginIsPressed={loginIsPressed}
          setModalAction={setModalAction}
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
