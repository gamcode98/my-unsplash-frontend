/* eslint-disable react/jsx-indent */
import { Control, SubmitHandler, useForm, FieldValues } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import loaderIcon from './../../../assets/ball-triangle.svg'
import { FormControl } from '../../FormControl'
import { AuthenticationNavigation } from '../../../types/AuthenticationNavigation'
import { post } from '../../../services/publicService'
import { IAlert } from '../../../interfaces/IAlert'

const schema = yup.object({
  email: yup
    .string()
    .required()
    .matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, 'Must be a valid address'),
  password: yup
    .string()
    .required()
    .max(17, 'Too Long!')
    .min(7, 'Too Short!')
    .matches(
      /^(?=.*?[A-ZÀ-Ú])(?=.*?[a-zà-ú])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      'Must contain at least one upper case letter, one lower case letter, one number and one special character'
    )
}).required()

interface Props {
  isLoading?: boolean
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>
  setHideLoginWithGoogle?: React.Dispatch<React.SetStateAction<boolean>>
  setAuthNavigation?: React.Dispatch<React.SetStateAction<AuthenticationNavigation>>
  setAlert?: React.Dispatch<React.SetStateAction<IAlert>>
}

interface IFormInputs {
  email: string
  password: string
}

const Signup = (props: Props): JSX.Element => {
  const { isLoading, setIsLoading, setHideLoginWithGoogle, setAuthNavigation, setAlert } = props

  const changeToLogin = (): void => setAuthNavigation?.('login')

  const { handleSubmit, control, reset } = useForm<IFormInputs>({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(schema),
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    setHideLoginWithGoogle?.(true)
    setIsLoading?.(true)
    reset()
    post('/auth/register', data)
      .then(() => {
        setAuthNavigation?.('message')
      })
      .catch(error => {
        setHideLoginWithGoogle?.(false)
        setAlert?.({
          message: error.response?.data?.message ?? 'Something went wrong',
          status: 'error',
          show: true
        })
      })
      .finally(() => {
        setIsLoading?.(false)
      })
  }

  return (
    isLoading
      ? <img src={loaderIcon} width={50} className='block mx-auto' />
      : <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl
            control={(control as unknown) as Control<FieldValues>}
            name='email'
            rules={{ required: true }}
            labelId={`${crypto.randomUUID()}-email-to-signup`}
            typeOfInput='text'
            placeholder='Email'
          />

          <FormControl
            control={(control as unknown) as Control<FieldValues>}
            name='password'
            rules={{ required: true }}
            labelId={`${crypto.randomUUID()}-password-to-signup`}
            typeOfInput='password'
            placeholder='Password'
          />

          <button
            className='bg-black font-bold text-white p-2 rounded-md w-full mb-4 hover:-translate-y-0.5 ease-linear duration-100 will-change-transform '
          >Create account
          </button>

          <div className='flex gap-1 justify-center'>
            <p className='text-center text-dark-gray'>Already have an account?</p>
            <button
              type='button'
              className='text-green hover:underline decoration-1 '
              onClick={changeToLogin}
            > Log in
            </button>
          </div>
        </form>
  )
}

export { Signup }
