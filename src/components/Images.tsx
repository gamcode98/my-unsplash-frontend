import { Image } from './Image'

const images = [
  {
    img: 'https://picsum.photos/600/500?random=1',
    label: 'A random image 1'
  },
  {
    img: 'https://picsum.photos/800/400?random=2',
    label: 'A random image 2'
  },
  {
    img: 'https://picsum.photos/400/400?random=3',
    label: 'A random image 3'
  },
  {
    img: 'https://picsum.photos/900/700?random=4',
    label: 'A random image 4'
  },
  {
    img: 'https://picsum.photos/500/700?random=5',
    label: 'A random image 5'
  },
  {
    img: 'https://picsum.photos/500/800?random=6',
    label: 'A random image 6'
  }
]

interface Props {
  handleOpenModal: (param: string) => void
}

const Images = (props: Props): JSX.Element => {
  const { handleOpenModal } = props

  return (
    <>
      {images.map((image, index) => (
        <Image
          key={index}
          image={image}
          handleOpenModal={handleOpenModal}
        />
      ))}
    </>
  )
}

export { Images }
