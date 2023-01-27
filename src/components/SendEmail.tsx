/* eslint-disable react/jsx-closing-tag-location */
import { Control, SubmitHandler, useForm, FieldValues } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FormControl } from './FormControl'
import loaderIcon from './../assets/ball-triangle.svg'
import { AuthenticationNavigation } from '../types/AuthenticationNavigation'

interface Email {
  emailSent: boolean
  emailAddress: string
}

const schema = yup.object({
  email: yup
    .string()
    .required()
}).required()

interface IFormInputs {
  email: string
}

interface Props {
  setHideLoginWithGoogle?: React.Dispatch<React.SetStateAction<boolean>>
  setEmail: React.Dispatch<React.SetStateAction<Email>>
  setAuthNavigation?: React.Dispatch<React.SetStateAction<AuthenticationNavigation>>
  isLoading?: boolean
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>
}

const SendEmail = (props: Props): JSX.Element => {
  const { setHideLoginWithGoogle, setEmail, setAuthNavigation, isLoading, setIsLoading } = props

  const { handleSubmit, control, reset } = useForm<IFormInputs>({
    defaultValues: { email: '' },
    resolver: yupResolver(schema),
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    const { email } = data
    reset()
    setIsLoading?.(true)
    setTimeout(() => {
      setEmail({ emailSent: true, emailAddress: email })
      setIsLoading?.(false)
    }, 3000)
  }

  const goBackToLogin = (): void => {
    setHideLoginWithGoogle?.(false)
    setAuthNavigation?.('login')
  }

  return (
    isLoading
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
          <button type='button' className='mx-auto block' onClick={goBackToLogin}>
            Cancel
          </button>
        </form>
      </div>
  )
}

export { SendEmail }
