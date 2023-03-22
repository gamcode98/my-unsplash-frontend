/* eslint-disable react/jsx-indent */
import { Control, SubmitHandler, useForm, FieldValues } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { FormControl } from '../../FormControl'
import loaderIcon from './../../../assets/ball-triangle.svg'
import { AuthenticationNavigation } from '../../../types/AuthenticationNavigation'
import useCurrentUser from '../../../hooks/useCurrentUser'
import { post } from '../../../services/publicService'
import { ServerResponse } from '../../../interfaces/login.dto'
import { ROUTES } from '../../../enums/routes'
import { IAlert } from '../../../interfaces/IAlert'

const schema = yup.object({
  email: yup
    .string()
    .required(),
  password: yup
    .string()
    .required()
}).required()

interface Props {
  setHideLoginWithGoogle?: React.Dispatch<React.SetStateAction<boolean>>
  isLoading?: boolean
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>
  setAuthNavigation?: React.Dispatch<React.SetStateAction<AuthenticationNavigation>>
  setAlert?: React.Dispatch<React.SetStateAction<IAlert>>
  handleCloseModalBtn: () => void
}

interface IFormInputs {
  email: string
  password: string
}

const Login = (props: Props): JSX.Element => {
  const { setHideLoginWithGoogle, isLoading, setIsLoading, setAuthNavigation, setAlert, handleCloseModalBtn } = props

  const { setCurrentUser } = useCurrentUser()

  const navigate = useNavigate()

  const goToSignup = (): void => setAuthNavigation?.('signup')

  const goToResetPassword = (): void => {
    setHideLoginWithGoogle?.(true)
    setAuthNavigation?.('resetPassword')
  }

  const { handleSubmit, control, reset } = useForm<IFormInputs>({
    defaultValues: { email: '', password: '123okAsd#' },
    resolver: yupResolver(schema),
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    setIsLoading?.(true)
    setHideLoginWithGoogle?.(true)
    reset()
    post<IFormInputs, ServerResponse>('/auth/login', data)
      .then(({ data }) => {
        const { response: { user, token } } = data
        localStorage.setItem('token', JSON.stringify(token))
        setCurrentUser(user)
        navigate(ROUTES.GALLERY)
      })
      .catch((error) => {
        setAlert?.({
          message: error.response?.data?.message ?? 'Something went wrong',
          status: 'error',
          show: true
        })
      })
      .finally(() => {
        setHideLoginWithGoogle?.(false)
        setIsLoading?.(false)
        handleCloseModalBtn()
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
          labelId={`${crypto.randomUUID()}-email-to-login`}
          typeOfInput='text'
          placeholder='Email'
        />

        <FormControl
          control={(control as unknown) as Control<FieldValues>}
          name='password'
          rules={{ required: true }}
          labelId={`${crypto.randomUUID()}-password-to-login`}
          typeOfInput='password'
          placeholder='Password'
        />

        <button className='bg-black font-bold text-white p-2 rounded-md w-full mb-4 hover:-translate-y-0.5 ease-linear duration-100 will-change-transform'>Log in</button>
        <button
          type='button'
          className='text-center mb-4 text-green hover:underline decoration-1 cursor-pointer block mx-auto'
          onClick={goToResetPassword}
        >Reset password
        </button>
        <div className='flex justify-center gap-1'>
          <p className='text-center'>No account? </p>
          <button
            type='button'
            className='text-green hover:underline decoration-1 cursor-pointer'
            onClick={goToSignup}
          >Create one
          </button>
        </div>
        </form>
  )
}

export { Login }
