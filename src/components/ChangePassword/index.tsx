import { Control, SubmitHandler, useForm, FieldValues } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FormControl } from '../FormControl'
import { patch } from '../../services/privateService'
import { IAlert } from '../../interfaces/IAlert'
import { useState } from 'react'

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
    .max(17, 'Too Long!')
    .min(7, 'Too Short!')
    .matches(
      /^(?=.*?[A-ZÀ-Ú])(?=.*?[a-zà-ú])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      'Must contain at least one upper case letter, one lower case letter, one number and one special character'
    )
}).required()

interface Props {
  setAlert: React.Dispatch<React.SetStateAction<IAlert>>
}

const ChangePassword = (props: Props): JSX.Element => {
  const { setAlert } = props
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { handleSubmit, control, reset } = useForm<IFormInputs>({
    defaultValues: { oldPassword: '', newPassword: '' },
    resolver: yupResolver(schema),
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    setIsLoading(true)
    reset()
    patch('/auth/update-password', data)
      .then(() => {
        setAlert({
          message: 'Password updated successfully',
          show: true,
          status: 'success'
        })
      })
      .catch(error => {
        setAlert({
          message: error.response?.data?.message ?? 'Something went wrong',
          status: 'error',
          show: true
        })
      })
      .finally(() => {
        setIsLoading(false)
      })
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

      <button
        disabled={isLoading}
        className='bg-black font-bold text-white p-2 rounded-md w-full mb-4 hover:-translate-y-0.5 ease-linear duration-100 will-change-transform'
      >{isLoading ? 'Sending...' : 'Submit'}
      </button>

    </form>
  )
}

export { ChangePassword }
