import { Control, SubmitHandler, useForm, FieldValues } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FormControl } from './FormControl'

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
  setHideLogginWithGoogle: React.Dispatch<React.SetStateAction<boolean>>
}

interface IFormInputs {
  email: string
  password: string
}

const Login = (props: Props): JSX.Element => {
  const { setHasAccount, setHideLogginWithGoogle } = props
  const changeToSignUp = (): void => setHasAccount?.(false)

  const { handleSubmit, control, reset } = useForm<IFormInputs>({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(schema),
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    const { email, password } = data
    // setIsloading(true)
    console.log({ email }, { password })
    reset()
    setTimeout(() => {
      // setIsloading(false)
      // setAlert({ status: 'success', message: 'Image added successfully', show: true })
      // handleCloseModal()
    }, 3000)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

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
        onClick={() => setHideLogginWithGoogle(true)}
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
