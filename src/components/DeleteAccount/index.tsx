import { Control, SubmitHandler, useForm, FieldValues } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FormControl } from '../FormControl'

interface IFormInputs {
  password: string
}

const schema = yup.object({
  password: yup
    .string()
    .required('password is required')
}).required()

const DeleteAccount = (): JSX.Element => {
  const { handleSubmit, control, reset } = useForm<IFormInputs>({
    defaultValues: { password: '' },
    resolver: yupResolver(schema),
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    const { password } = data
    console.log({ data })
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        control={(control as unknown) as Control<FieldValues>}
        name='password'
        rules={{ required: true }}
        labelId='password-to-delete-account'
        typeOfInput='password'
        placeholder='Password'
      />

      <button className='bg-red font-bold text-white p-2 rounded-md w-full mb-4 hover:-translate-y-0.5 ease-linear duration-100 will-change-transform'>Delete</button>

    </form>
  )
}

export { DeleteAccount }
