/* eslint-disable react/jsx-indent */
import { useState } from 'react'
import { EmailMessage } from './EmailMessage'
import { Login } from './Login'
import { ResetPassword } from './ResetPassword'
import { SendEmail } from './SendEmail'

interface Props {
  setHasAccount?: React.Dispatch<React.SetStateAction<boolean>>
  hideLogginWithGoogle: boolean
  setHideLogginWithGoogle: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginOrResetPassword = (props: Props): JSX.Element => {
  const { setHasAccount, hideLogginWithGoogle, setHideLogginWithGoogle } = props

  const [emailSent, setEmailSent] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')

  return (
    hideLogginWithGoogle
      ? <ResetPassword
          setHideLogginWithGoogle={setHideLogginWithGoogle}
          setEmailSent={setEmailSent}
        >
          {emailSent ? <EmailMessage email={email} /> : <SendEmail setEmail={setEmail} />}
        </ResetPassword>
      : <Login setHasAccount={setHasAccount} setHideLogginWithGoogle={setHideLogginWithGoogle} />
  )
}

export { LoginOrResetPassword }
