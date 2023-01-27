import { useState } from 'react'
import { AuthenticationNavigation } from '../types/AuthenticationNavigation'
import xMarkIcon from './../assets/x-mark.svg'
import AccountCreatedMessage from './AccountCreatedMessage'
import { Authentication } from './Authentication'
import { Login } from './Login'
import { LoginWithGoogle } from './LoginWithGoogle'
import { ResetPassword } from './ResetPassword'
import { Signup } from './Signup'

interface Props {
  loginIsPressed?: boolean
  handleCloseModal: () => void
}

const GetStarted = (props: Props): JSX.Element => {
  const { loginIsPressed, handleCloseModal } = props

  const [hideLoginWithGoogle, setHideLoginWithGoogle] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [authNavigation, setAuthNavigation] = useState<AuthenticationNavigation>(loginIsPressed !== undefined ? 'login' : 'signup')

  const authentication = {
    login: <Login />,
    signup: <Signup />,
    accountCreatedMessage: <AccountCreatedMessage />,
    resetPassword: <ResetPassword />
  }

  const handleCloseModalBtn = (): void => {
    setAuthNavigation('signup')
    setHideLoginWithGoogle(false)
    handleCloseModal()
  }

  return (
    <>
      <button
        onClick={handleCloseModalBtn}
        disabled={isLoading} className={`absolute top-3 right-3 ${isLoading && 'cursor-wait'}`}
      >
        <img src={xMarkIcon} width={20} />
      </button>

      {!hideLoginWithGoogle && <LoginWithGoogle isLoading={isLoading} />}

      <Authentication
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setAuthNavigation={setAuthNavigation}
        setHideLoginWithGoogle={setHideLoginWithGoogle}
      >
        {authentication[authNavigation as keyof typeof authentication] || <Signup />}
      </Authentication>
    </>
  )
}

export { GetStarted }
