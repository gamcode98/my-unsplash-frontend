/* eslint-disable react/jsx-indent */
import { useState } from 'react'
import { EmailMessage } from './EmailMessage'
import { Login } from './Login'
import { ResetPassword } from './ResetPassword'
import { SendEmail } from './SendEmail'

interface Props {
  setHasAccount?: React.Dispatch<React.SetStateAction<boolean>>
  isLoading?: boolean
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>
  hideLoginWithGoogle: boolean
  setHideLoginWithGoogle: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginOrResetPassword = (props: Props): JSX.Element => {
  const { setHasAccount, isLoading, setIsLoading, hideLoginWithGoogle, setHideLoginWithGoogle } = props

  const [showLogin, setShowLogin] = useState<boolean>(false)
  const [emailSent, setEmailSent] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')

  return (
    showLogin
      ? <Login
          setHasAccount={setHasAccount}
          setHideLoginWithGoogle={setHideLoginWithGoogle}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      : <ResetPassword
          setHasAccount={setHasAccount}
          setEmailSent={setEmailSent}
          setHideLoginWithGoogle={setHideLoginWithGoogle}
          setShowLogin={setShowLogin}
        >
          {emailSent ? <EmailMessage email={email} /> : <SendEmail setEmail={setEmail} />}
        </ResetPassword>
  )
}

export { LoginOrResetPassword }
