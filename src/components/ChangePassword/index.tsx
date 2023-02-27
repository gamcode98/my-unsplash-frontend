import { Control, SubmitHandler, useForm, FieldValues } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FormControl } from '../FormControl'

interface IFormInputs {
  oldPassword: string
  newPassword: string
}

const schema = yup.object({
  oldPassword: yup
    .string()
    .required('old password is required'),
  newPassword: yup
    .string()
    .required('new password is required')
}).required()

const ChangePassword = (): JSX.Element => {
  const { handleSubmit, control, reset } = useForm<IFormInputs>({
    defaultValues: { oldPassword: '', newPassword: '' },
    resolver: yupResolver(schema),
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    const { oldPassword, newPassword } = data
    console.log({ data })
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        control={(control as unknown) as Control<FieldValues>}
        name='oldPassword'
        rules={{ required: true }}
        labelId='old-password'
        typeOfInput='password'
        placeholder='Old password'
      />

      <FormControl
        control={(control as unknown) as Control<FieldValues>}
        name='newPassword'
        rules={{ required: true }}
        labelId='new-password'
        typeOfInput='password'
        placeholder='New Password'
      />

      <button className='bg-black font-bold text-white p-2 rounded-md w-full mb-4 hover:-translate-y-0.5 ease-linear duration-100 will-change-transform'>Submit</button>

    </form>
  )
}

export { ChangePassword }
