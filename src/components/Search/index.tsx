import { useEffect, useState } from 'react'
import { Content } from '../../interfaces/IImage'

interface Props {
  images: Content[]
  setSearchResults: (images: Content[] | []) => void
}

const Search = (props: Props): JSX.Element => {
  const { images, setSearchResults } = props

  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const results = images.filter(image => {
      return image.label.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setSearchResults(results)
  }, [images, searchTerm])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value)
  }

  return (
    <input
      onChange={(e) => handleChange(e)}
      value={searchTerm}
      className='border border-light-gray rounded-md p-2 focus:outline-none
    focus:border-black bg-magnifying-glass bg-no-repeat bg-w-20 bg-custom-position pl-12 w-3/4'
      type='search'
      placeholder='Search by name'
    />
  )
}

export { Search }
