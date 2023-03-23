import { Control, SubmitHandler, useForm, FieldValues } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FormControl } from '../FormControl'
import { IAlert } from '../../interfaces/IAlert'
import { remove } from '../../services/privateService'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../enums/routes'

interface IFormInputs {
  password: string
}

const schema = yup.object({
  password: yup
    .string()
    .required('password is required')
}).required()

interface Props {
  setAlert: React.Dispatch<React.SetStateAction<IAlert>>
}

const DeleteAccount = (props: Props): JSX.Element => {
  const { setAlert } = props
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const navigate = useNavigate()

  const { handleSubmit, control, reset } = useForm<IFormInputs>({
    defaultValues: { password: '' },
    resolver: yupResolver(schema),
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    setIsLoading(true)
    reset()
    remove('/auth/delete-account', data)
      .then(() => {
        navigate(ROUTES.ROOT)
      })
      .catch((error) => {
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
        name='password'
        rules={{ required: true }}
        labelId='password-to-delete-account'
        typeOfInput='password'
        placeholder='Password'
      />

      <button
        disabled={isLoading}
        className='bg-red font-bold text-white p-2 rounded-md w-full mb-4 hover:-translate-y-0.5 ease-linear duration-100 will-change-transform'
      >
        {isLoading ? 'Sending...' : 'Submit'}
      </button>

    </form>
  )
}

export { DeleteAccount }
