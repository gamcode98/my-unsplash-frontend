import { useState } from 'react'
import { GetStarted } from '../../components/GetStarted'
import { Modal } from '../../components/Modal'
import { ModalAction } from '../../types'
import heroImage from './../../assets/hero-image.svg'

const Home = (): JSX.Element => {
  const [modalAction, setModalAction] = useState<ModalAction>(null)

  return (
    <main className='w-11/12 mx-auto'>
      <section className='mt-16 mb-8 lg:flex lg:justify-between lg:mb-24 lg:gap-32'>
        <div className='lg:self-center'>
          <h1 className='text-3xl text-center mb-8 md:text-5xl font-noto-sans lg:text-start lg:leading-tight'>Welcome to our image storage platform.</h1>
          <p className='mb-4 text-dark-gray lg:mb-8 lg:text-lg'>Start using our platform today and experience the convenience and peace of mind of having your images safely stored and accessible at all times. Sign up for free and try our platform now!
          </p>
          <button
            onClick={() => setModalAction('open')}
            className='bg-green text-white font-bold px-4 py-2 rounded-lg block mx-auto mb-4 lg:mx-0 lg:px-8 hover:-translate-y-0.5 ease-linear duration-100 will-change-transform'
          >Get started
          </button>
        </div>
        <img
          src={heroImage}
          alt='hero image'
          className='md:w-4/5 mx-auto lg:w-2/4 lg:mx-0'
        />
      </section>

      <Modal modalAction={modalAction}>
        <GetStarted setModalAction={setModalAction} />
      </Modal>

    </main>
  )
}

export { Home }
