import heroImage from './../../assets/hero-image.svg'
import addImage from './../../assets/add-image.svg'
import deleteImage from './../../assets/delete-image.svg'

const Home = (): JSX.Element => {
  return (
    <main className='w-11/12 mx-auto md:flex md:justify-between'>
      <section className='mb-8'>
        <h1 className='text-3xl text-center mb-8 md:text-5xl font-noto-sans'>Image storage</h1>
        <p className='mb-4'>To get started, use the button bellow and login</p>
        <button className='bg-green text-white px-4 py-2 rounded-lg block mx-auto mb-4'>Login</button>
        <img src={heroImage} alt='hero image' />
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl text-center font-noto-sans mb-4'>Add images by an url</h2>
        <p className='mb-4'>You can select any image that you want and upload it here</p>
        <img src={addImage} alt='add image by url' className='w-3/5 mx-auto' />
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl text-center font-noto-sans mb-4'>Delete images by a password</h2>
        <p className='mb-4'>When you want to delete it, just do it. You only need confirm using a password</p>
        <img src={deleteImage} alt='delete image by password' className='w-3/5 mx-auto' />
      </section>
    </main>
  )
}

export { Home }
