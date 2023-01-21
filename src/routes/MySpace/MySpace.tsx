/* eslint-disable @typescript-eslint/restrict-plus-operands */

const images = [
  {
    img: 'https://picsum.photos/600/500?random=1',
    label: 'A random image'
  },
  {
    img: 'https://picsum.photos/800/400?random=2',
    label: 'A random image'
  },
  {
    img: 'https://picsum.photos/400/400?random=3',
    label: 'A random image'
  },
  {
    img: 'https://picsum.photos/900/700?random=4',
    label: 'A random image'
  },
  {
    img: 'https://picsum.photos/500/700?random=5',
    label: 'A random image'
  },
  {
    img: 'https://picsum.photos/500/800?random=6',
    label: 'A random image'
  }
]

const MySpace = (): JSX.Element => {
  return (
    <div className='md:w-11/12 md:mx-auto md:gap-8 md:columns-3 mb-12'>
      {images.map((image, index) => (
        <div key={index} className='mb-12'>
          <img src={image.img} className='mb-2 w-full' />
          <div className='flex justify-between items-center w-11/12 mx-auto'>
            <p>{image.label + ' ' + index}</p>
            <button className='bg-red text-white rounded px-4 py-2'>Delete</button>
          </div>
        </div>
      ))}

    </div>
  )
}

export default MySpace
