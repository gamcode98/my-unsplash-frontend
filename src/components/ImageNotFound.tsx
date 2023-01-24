import imageNotFound from './../assets/image-not-found.svg'

const ImageNotFound = (): JSX.Element => {
  return (
    <div className='fixed md:mt-20 lg:w-2/5 lg:translate-x-1/2 lg:right-1/2'>
      <h2 className='text-center text-2xl mb-8 md:mb-12'>Ups... image not found</h2>
      <img src={imageNotFound} alt='image not found' className='w-full block md:w-3/5 md:mx-auto' />
    </div>
  )
}

export { ImageNotFound }
