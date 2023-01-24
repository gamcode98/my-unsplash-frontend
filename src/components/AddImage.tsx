/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from 'react'
import { Control, SubmitHandler, useForm, FieldValues } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FormControl } from './FormControl'
import { IAlert } from '../interfaces/IAlert'
import { IImage } from '../interfaces/IImage'

const schema = yup.object({
  label: yup
    .string()
    .required(),
  photoUrl: yup
    .string()
    .required()
}).required()

interface Props {
  handleCloseModal: () => void
  setAlert: React.Dispatch<React.SetStateAction<IAlert>>
  images: IImage[]
  setImages: React.Dispatch<React.SetStateAction<IImage[]>>
}

interface IFormInputs {
  label: string
  photoUrl: string
}

const AddImage = (props: Props): JSX.Element => {
  const { handleCloseModal, setAlert, images, setImages } = props

  const [isLoading, setIsloading] = useState<boolean>(false)

  const { handleSubmit, control, reset } = useForm<IFormInputs>({
    defaultValues: { label: '', photoUrl: '' },
    resolver: yupResolver(schema),
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    const { label, photoUrl } = data
    setIsloading(true)
    reset()
    setTimeout(() => {
      setImages([{ _id: crypto.randomUUID(), label, photoUrl }, ...images])
      setIsloading(false)
      setAlert({ status: 'success', message: 'Image added successfully', show: true })
      handleCloseModal()
    }, 3000)
  }

  const handleClose = (): void => {
    reset()
    handleCloseModal()
  }

  return (
    <form className='font-noto-sans' onSubmit={handleSubmit(onSubmit)}>
      <h2 className='mb-4 text-lg'>Add a new photo</h2>

      <FormControl
        control={(control as unknown) as Control<FieldValues>}
        name='label'
        rules={{ required: true }}
        labelId='label-text'
        labelText='Label'
        typeOfInput='text'
        placeholder='Suspendisse elit massa'
      />

      <FormControl
        control={(control as unknown) as Control<FieldValues>}
        name='photoUrl'
        rules={{ required: true }}
        labelId='photo-url'
        labelText='Photo URL'
        typeOfInput='text'
        placeholder='https://unsplash.com/es/fotos/1223498193-J-aHtRnZalkpsI...'
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
          className={`bg-green text-white px-4 py-2 rounded-md font-bold hover:-translate-y-0.5 ease-linear duration-100 will-change-transform 
            ${isLoading && 'cursor-wait bg-opacity-75 hover:translate-y-0'}`}
          type='submit' disabled={isLoading}
        >{isLoading ? 'Adding...' : 'Submit'}
        </button>
      </div>
    </form>
  )
}

export { AddImage }
