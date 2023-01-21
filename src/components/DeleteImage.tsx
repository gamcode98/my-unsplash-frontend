interface Props {
  handleCloseModal: () => void
  imageId: string | null
}
const DeleteImage = (props: Props): JSX.Element => {
  const { handleCloseModal, imageId } = props

  // const showImageId = (): void => console.log({ imageId })

  return (
    <form className='font-noto-sans'>
      <h2 className='mb-4 text-lg'>Are you sure?</h2>
      <label
        htmlFor='password'
        className='block text-xs mb-2'
      >Password
      </label>
      <input
        id='password'
        type='password'
        placeholder='Your secret password'
        className='block px-4 py-2 mb-4 border border-light-gray rounded-md p-2 focus:outline-none focus:border-black w-full'
      />
      <div className='flex gap-4 justify-end'>
        <button onClick={handleCloseModal} className='text-light-gray' type='button'>Cancel</button>
        {/* <button className='bg-green text-white px-4 py-2 rounded-md font-bold' type='button' onClick={showImageId}>Get imageID</button> */}
        <button className='bg-red text-white px-4 py-2 rounded-md font-bold'>Confrm</button>
      </div>
    </form>
  )
}

export { DeleteImage }
