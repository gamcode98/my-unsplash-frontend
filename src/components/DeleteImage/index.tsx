/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from 'react'
import { Control, SubmitHandler, useForm, FieldValues } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormControl } from '../FormControl'
import { IAlert } from '../../interfaces/IAlert'
import useImagesContext from '../../hooks/useImagesContext'

const schema = yup.object({
  password: yup
    .string()
    .required()
}).required()

interface Props {
  handleCloseModal: () => void
  imageId: string | null
  setAlert: React.Dispatch<React.SetStateAction<IAlert>>
}

interface IFormInputs {
  password: string
}

const DeleteImage = (props: Props): JSX.Element => {
  const { handleCloseModal, imageId, setAlert } = props

  const { images, setImages } = useImagesContext()

  const [isLoading, setIsloading] = useState<boolean>(false)

  const { handleSubmit, control, reset } = useForm<IFormInputs>({
    defaultValues: { password: '' },
    resolver: yupResolver(schema),
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    console.log(data)
    setIsloading(true)
    reset()
    // setTimeout(() => {
    //   const imagesFiltered = images.filter(image => image._id !== imageId)
    //   setImages(imagesFiltered)
    //   setIsloading(false)
    //   setAlert({ status: 'success', message: 'Image deleted successfully', show: true })
    //   handleCloseModal()
    // }, 3000)
  }

  const handleClose = (): void => {
    reset()
    handleCloseModal()
  }

  return (
    <form className='font-noto-sans' onSubmit={handleSubmit(onSubmit)}>
      <h2 className='mb-4 text-lg'>Are you sure?</h2>

      <FormControl
        control={(control as unknown) as Control<FieldValues>}
        name='password'
        rules={{ required: true }}
        labelId='password-to-delete-image'
        labelText='Password'
        typeOfInput='password'
        placeholder='Your secret password'
      />

      <div className='flex gap-4 justify-end'>
        <button
          onClick={handleClose}
          className={`text-light-gray ${isLoading && 'cursor-wait'}`}
          disabled={isLoading}
          type='button'
        >Cancel
        </button>

        <button
          className={`bg-red text-white px-4 py-2 rounded-md font-bold hover:-translate-y-0.5 ease-linear duration-100 will-change-transform 
            ${isLoading && 'cursor-wait bg-opacity-75 hover:translate-y-0'}`}
          type='submit' disabled={isLoading}
        >{isLoading ? 'Removing...' : 'Confirm'}
        </button>
      </div>
    </form>
  )
}

export { DeleteImage }
