/* eslint-disable react/jsx-indent */
import { useState } from 'react'
import { EmailMessage } from './EmailMessage'
import { Login } from './Login'
import { ResetPassword } from './ResetPassword'
import { SendEmail } from './SendEmail'

interface Props {
  setHasAccount?: React.Dispatch<React.SetStateAction<boolean>>
  resetPasswordIsPressed: boolean
  setResetPasswordIsPressed: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginOrResetPassword = (props: Props): JSX.Element => {
  const { setHasAccount, resetPasswordIsPressed, setResetPasswordIsPressed } = props

  const [emailSent, setEmailSent] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')

  return (
    <>
      {resetPasswordIsPressed
        ? <ResetPassword
            setResetPasswordIsPressed={setResetPasswordIsPressed}
            setEmailSent={setEmailSent}
          >
          {emailSent ? <EmailMessage email={email} /> : <SendEmail setEmail={setEmail} />}
          </ResetPassword>
        : <Login setHasAccount={setHasAccount} setResetPasswordIsPressed={setResetPasswordIsPressed} />}
    </>
  )
}

export { LoginOrResetPassword }
