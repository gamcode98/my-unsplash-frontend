/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable no-useless-escape */
import { useState } from 'react'
import { Control, SubmitHandler, useForm, FieldValues } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FormControl } from '../FormControl'
import { IAlert } from '../../interfaces/IAlert'
import { Content } from '../../interfaces/IImage'
import { post } from '../../services/privateService'
import { ServerResponse } from '../../interfaces/image.dto'

const schema = yup.object({
  label: yup
    .string()
    .required(),
  imageUrl: yup
    .string()
    .required()
    .matches(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\.~#?&\/\/=]*)/, 'Must be a valid url')
}).required()

interface Props {
  handleCloseModal: () => void
  setAlert: React.Dispatch<React.SetStateAction<IAlert>>
  images: Content[]
  setImages: (images: Content[] | []) => void
}

interface IFormInputs {
  label: string
  imageUrl: string
}

const AddImage = (props: Props): JSX.Element => {
  const { handleCloseModal, setAlert, images, setImages } = props

  const [isLoading, setIsloading] = useState<boolean>(false)

  const { handleSubmit, control, reset } = useForm<IFormInputs>({
    defaultValues: { label: '', imageUrl: '' },
    resolver: yupResolver(schema),
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    setIsloading(true)
    reset()
    post<IFormInputs, ServerResponse>('/images', data)
      .then(({ data }) => {
        setImages([data.response, ...images])
        setAlert({ status: 'success', message: 'Image added successfully', show: true })
      })
      .catch(() => {
        setAlert({ status: 'error', message: 'Something went wrong', show: true })
      })
      .finally(() => {
        setIsloading(false)
        handleCloseModal()
      })
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
        name='imageUrl'
        rules={{ required: true }}
        labelId='image-url'
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
