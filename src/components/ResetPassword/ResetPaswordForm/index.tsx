import { yupResolver } from '@hookform/resolvers/yup'
import { Control, FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import * as yup from 'yup'
import { IAlert } from '../../../interfaces/IAlert'
import { post } from '../../../services/publicService'
import { ResetPasswordNavigation } from '../../../types/ResetPasswordNavigation'
import { FormControl } from '../../FormControl'

interface IFormInputs {
  newPassword: string
  confirmPassword: string
}

interface Data extends Pick<IFormInputs, 'newPassword'> {
  token: string
}

const schema = yup.object().shape({
  newPassword: yup.string()
    .required('This field is required')
    .min(7, 'Too Short!')
    .max(17, 'Too Long!')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      'Must contain at least one upper case English letter, one lower case English letter, one number and one special character'
    ),
  confirmPassword: yup.string()
    .required('Password confirmation is required')
    .when('newPassword', {
      is: (val: string | any[]) => !!(Boolean(val) && val.length > 0),
      then: yup.string().oneOf(
        [yup.ref('newPassword')],
        'Both passwords must match'
      )
    })
})

interface Props {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  setResetPasswordNavigation: React.Dispatch<React.SetStateAction<ResetPasswordNavigation>>
  setAlert: React.Dispatch<React.SetStateAction<IAlert>>
}

const ResetPasswordForm = (props: Props): JSX.Element => {
  const { setIsLoading, setResetPasswordNavigation, setAlert } = props
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const token = searchParams.get('token')

  const { handleSubmit, control, reset } = useForm<IFormInputs>({
    defaultValues: { newPassword: '', confirmPassword: '' },
    resolver: yupResolver(schema),
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    const { newPassword } = data
    reset()
    setIsLoading(true)
    if (token !== null) {
      post<Data, unknown>('/auth/change-password', { newPassword, token })
        .then(() => {
          setResetPasswordNavigation('message')
        }).catch(error => {
          setAlert({
            message: error.response?.data?.message ?? 'Something went wrong',
            status: 'error',
            show: true
          })
        })
        .finally(() => {
          setIsLoading(false)
        })
    } else {
      setAlert({ status: 'error', show: true, message: 'Unauthorized' })
    }
  }

  return (
    <div className='p-4 shadow w-11/12 mx-auto md:w-2/5 lg:w-1/4'>
      <h3 className='text-center font-bold mb-2 text-xl'>Create a new password</h3>
      <p className='mb-3'>Enter the password you would like to change your password.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          control={(control as unknown) as Control<FieldValues>}
          name='newPassword'
          rules={{ required: true }}
          labelId='new-password'
          typeOfInput='password'
          placeholder='New password'
        />
        <FormControl
          control={(control as unknown) as Control<FieldValues>}
          name='confirmPassword'
          rules={{ required: true }}
          labelId='confirm-password'
          typeOfInput='password'
          placeholder='Confirm password'
        />
        <button className='bg-black font-bold text-white p-2 rounded-md w-full mb-4 hover:-translate-y-0.5 ease-linear duration-100 will-change-transform'>Submit</button>
      </form>
    </div>
  )
}

export { ResetPasswordForm }
