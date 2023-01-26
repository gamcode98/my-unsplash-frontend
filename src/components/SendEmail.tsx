/* eslint-disable react/jsx-closing-tag-location */
import { Control, SubmitHandler, useForm, FieldValues } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FormControl } from './FormControl'
import loaderIcon from './../assets/ball-triangle.svg'
import { useState } from 'react'

const schema = yup.object({
  email: yup
    .string()
    .required()
}).required()

interface IFormInputs {
  email: string
}

interface Props {
  setHideLogginWithGoogle?: React.Dispatch<React.SetStateAction<boolean>>
  setEmailSent?: React.Dispatch<React.SetStateAction<boolean>>
  setEmail: React.Dispatch<React.SetStateAction<string>>
}

const SendEmail = (props: Props): JSX.Element => {
  const { setHideLogginWithGoogle, setEmailSent, setEmail } = props

  const [showLoader, setShowLoader] = useState<boolean>(false)

  const { handleSubmit, control, reset } = useForm<IFormInputs>({
    defaultValues: { email: '' },
    resolver: yupResolver(schema),
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    const { email } = data
    // setIsloading(true)
    console.log({ email })
    reset()
    setShowLoader(true)
    setTimeout(() => {
      // setIsloading(false)
      // setAlert({ status: 'success', message: 'Image added successfully', show: true })
      // handleCloseModal()
      console.log('closed')
      setEmail(email)
      setEmailSent?.(true)
      setShowLoader(false)
    }, 3000)
  }

  return (
    showLoader
      ? <img src={loaderIcon} width={50} className='block mx-auto' />
      : <div>
        <h2 className='font-bold text-3xl text-center mb-8'>Enter your email to <br /> reset password</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl
            control={(control as unknown) as Control<FieldValues>}
            name='email'
            rules={{ required: true }}
            labelId={`${crypto.randomUUID()}-email-to-reset-password`}
            typeOfInput='text'
            placeholder='Email'
          />
          <button className='bg-black font-bold text-white p-2 rounded-md w-full mb-4 hover:-translate-y-0.5 ease-linear duration-100 will-change-transform'>Reset password</button>
          <button type='button' className='mx-auto block' onClick={() => setHideLogginWithGoogle?.(false)}>
            Cancel
          </button>
        </form>
      </div>
  )
}

export { SendEmail }
