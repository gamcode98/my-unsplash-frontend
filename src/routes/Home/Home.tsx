import { useRef } from 'react'
import heroImage from './../../assets/hero-image.svg'
import addImage from './../../assets/add-image.svg'
import deleteImage from './../../assets/delete-image.svg'
import xMarkIcon from './../../assets/x-mark.svg'
import { GetStarted } from '../../components/GetStarted'

const Home = (): JSX.Element => {
  const modalRef = useRef<HTMLDialogElement | null>(null)

  const handleOpenModal = (): void => modalRef.current?.showModal()

  const handleCloseModal = (): void => modalRef.current?.close()

  return (
    <main className='w-11/12 mx-auto'>
      <section className='mt-16 mb-8 lg:flex lg:justify-between lg:mb-24 lg:gap-32'>
        <div className='lg:self-center'>
          <h1 className='text-3xl text-center mb-8 md:text-5xl font-noto-sans lg:text-start lg:leading-tight'>Welcome to our image storage platform.</h1>
          <p className='mb-4 text-dark-gray lg:mb-8 lg:text-lg'>Start using our platform today and experience the convenience and peace of mind of having your images safely stored and accessible at all times. Sign up for free and try our platform now!</p>
          <button onClick={handleOpenModal} className='bg-green text-white px-4 py-2 rounded-lg block mx-auto mb-4 lg:mx-0 lg:px-8 hover:scale-105 ease-linear duration-100 will-change-transform'>Get started</button>
        </div>
        <img src={heroImage} alt='hero image' className='md:w-4/5 mx-auto lg:w-2/4 lg:mx-0' />
      </section>

      <section className='mb-8 p-4 shadow-md md:flex md:items-center md:gap-16 lg:flex-row-reverse lg:justify-between lg:gap-40 lg:mb-16'>
        <img src={addImage} alt='add image by url' className='w-3/5 mx-auto block mb-12 md:w-1/3 lg:w-1/5 lg:mx-0 lg:mr-8' />
        <div className='lg:ml-20 lg:w-2/4'>
          <h2 className='text-2xl text-center font-noto-sans font-bold mb-4 md:text-start'>Add images by an url</h2>
          <p className='mb-4 text-dark-gray'>Have an image online that you want to add to your image collection? Don't worry! Our platform offers the option to add images via a URL.</p>
        </div>
      </section>

      <section className='mb-8 p-4 shadow-md md:flex md:items-center md:gap-16 lg:justify-between lg:gap-40 lg:mb-16'>
        <img src={deleteImage} alt='delete image by password' className='w-3/5 mx-auto block mb-12 md:w-1/3 lg:w-1/3 lg:mx-0 lg:mr-8 lg:ml-20' />
        <div className='lg:w-2/4'>
          <h2 className='text-2xl text-center font-noto-sans font-bold mb-4 md:text-start'>Delete images by a password</h2>
          <p className='mb-4 text-dark-gray'>Do you have an image in your collection that you want to delete? Don't worry! Our platform offers the option to delete images by providing a password.</p>
        </div>
      </section>

      <dialog ref={modalRef} className='rounded-md p-8 pt-12 fixed md:w-2/4 lg:w-3/12'>
        <button onClick={handleCloseModal} className='absolute top-3 right-3'>
          <img src={xMarkIcon} width={20} />
        </button>
        <GetStarted />
      </dialog>

    </main>
  )
}

export { Home }
