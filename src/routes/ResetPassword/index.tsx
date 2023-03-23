/* eslint-disable react/jsx-closing-tag-location */
import { useState } from 'react'
import { Alert } from '../../components/Alert'
import { IAlert } from '../../interfaces/IAlert'
import { ResetPasswordForm } from '../../components/ResetPassword/ResetPaswordForm'
import loaderIcon from './../../assets/ball-triangle.svg'
import { ResetPasswordNavigation } from '../../types/ResetPasswordNavigation'
import { Message } from '../../components/ResetPassword/Message'

const ResetPassword = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [resetPasswordNavigation, setResetPasswordNavigation] = useState<ResetPasswordNavigation>('resetPasswordForm')
  const [alert, setAlert] = useState<IAlert>({
    status: 'success',
    show: false,
    message: ''
  })

  const content = {
    resetPasswordForm: <ResetPasswordForm
      setIsLoading={setIsLoading}
      setResetPasswordNavigation={setResetPasswordNavigation}
      setAlert={setAlert}
                       />,
    message: <Message />

  }

  return (
    <div className='h-screen flex items-center'>
      {
        isLoading
          ? <div className='w-11/12 mx-auto'>
            <img src={loaderIcon} width={50} className='block mx-auto mb-10' />
            <p className='text-center'>Loading...</p>
          </div>
          : content[resetPasswordNavigation] ||
            <ResetPasswordForm
              setIsLoading={setIsLoading}
              setResetPasswordNavigation={setResetPasswordNavigation}
              setAlert={setAlert}
            />
      }
      <Alert alert={alert} setAlert={setAlert} />
    </div>
  )
}

export { ResetPassword }
