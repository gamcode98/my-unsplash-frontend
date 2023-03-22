import { useState } from 'react'
import { AuthenticationNavigation } from '../../types/AuthenticationNavigation'
import xMarkIcon from './../../assets/x-mark.svg'
import { Wrapper } from './Wrapper'
import { Login } from './Login'
import { LoginWithGoogle } from './LoginWithGoogle'
import { ResetPassword } from './ResetPassword'
import { Signup } from './Signup'
import { Message } from './Message'
import { ModalAction } from '../../types'
import { IAlert } from '../../interfaces/IAlert'

interface Props {
  loginIsPressed?: boolean
  setModalAction: React.Dispatch<React.SetStateAction<ModalAction>>
  setAlert: React.Dispatch<React.SetStateAction<IAlert>>
}

const GetStarted = (props: Props): JSX.Element => {
  const { loginIsPressed, setModalAction, setAlert } = props

  const [hideLoginWithGoogle, setHideLoginWithGoogle] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [authNavigation, setAuthNavigation] = useState<AuthenticationNavigation>(loginIsPressed !== undefined ? 'login' : 'signup')

  const handleCloseModalBtn = (): void => {
    setAuthNavigation('signup')
    setHideLoginWithGoogle(false)
    setModalAction('close')
  }

  const authentication = {
    login: <Login handleCloseModalBtn={handleCloseModalBtn} />,
    signup: <Signup />,
    message: <Message />,
    resetPassword: <ResetPassword />
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

      <Wrapper
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setAuthNavigation={setAuthNavigation}
        setHideLoginWithGoogle={setHideLoginWithGoogle}
        setAlert={setAlert}
      >
        {authentication[authNavigation as keyof typeof authentication] || <Signup />}
      </Wrapper>
    </>
  )
}

export { GetStarted }
