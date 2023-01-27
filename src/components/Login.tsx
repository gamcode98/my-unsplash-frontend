/* eslint-disable react/jsx-indent */
import { Control, SubmitHandler, useForm, FieldValues } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FormControl } from './FormControl'
import loaderIcon from './../assets/ball-triangle.svg'

const schema = yup.object({
  email: yup
    .string()
    .required(),
  password: yup
    .string()
    .required()
}).required()

interface Props {
  setHasAccount?: React.Dispatch<React.SetStateAction<boolean>>
  setHideLoginWithGoogle: React.Dispatch<React.SetStateAction<boolean>>
  isLoading?: boolean
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>
}

interface IFormInputs {
  email: string
  password: string
}

const Login = (props: Props): JSX.Element => {
  const { setHasAccount, setHideLoginWithGoogle, isLoading, setIsLoading } = props
  const changeToSignUp = (): void => setHasAccount?.(false)

  const { handleSubmit, control, reset } = useForm<IFormInputs>({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(schema),
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    const { email, password } = data
    setIsLoading?.(true)
    setHideLoginWithGoogle(true)
    console.log({ email }, { password })
    reset()
    setTimeout(() => {
      setIsLoading?.(false)
    }, 3000)
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
          onClick={() => setHideLoginWithGoogle(true)}
        >Reset password
        </button>
        <div className='flex justify-center gap-1'>
          <p className='text-center'>No account? </p>
          <button
            type='button'
            className='text-green hover:underline decoration-1 cursor-pointer'
            onClick={changeToSignUp}
          >Create one
          </button>
        </div>
        </form>
  )
}

export { Login }
