interface Props {
  image: any
  handleOpenModal: (param: string) => void
}

const Image = (props: Props): JSX.Element => {
  const { image, handleOpenModal } = props

  return (
    <div className='group mb-12 lg:relative'>
      <img src={image.img} className='mb-2 w-full lg:rounded-2xl' />
      <div className='flex justify-between items-center w-11/12 mx-auto lg:absolute lg:hidden lg:top-0 lg:bottom-0 lg:left-0 lg:right-0 lg:flex-col-reverse font-montserrat lg:group-hover:flex'>
        <p className='lg:self-start lg:text-white lg:font-bold lg:mb-4'>{image.label}</p>
        <button
          className='bg-red text-white rounded px-4 py-2 lg:self-end lg:bg-opacity-0 lg:border-2 lg:border-red lg:rounded-2xl lg:text-red lg:font-semibold lg:mt-4'
          onClick={() => handleOpenModal(image.label)}
        >Delete
        </button>
      </div>

    </div>
  )
}

export { Image }
