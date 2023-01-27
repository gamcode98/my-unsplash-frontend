import { AuthenticationNavigation } from '../types/AuthenticationNavigation'

interface Props {
  emailAddress: string
  setHideLoginWithGoogle?: React.Dispatch<React.SetStateAction<boolean>>
  setAuthNavigation?: React.Dispatch<React.SetStateAction<AuthenticationNavigation>>
}
const EmailMessage = (props: Props): JSX.Element => {
  const { emailAddress, setHideLoginWithGoogle, setAuthNavigation } = props

  const goBackToLogin = (): void => {
    setHideLoginWithGoogle?.(false)
    setAuthNavigation?.('login')
  }

  return (
    <div>
      <p>If an account exists for {emailAddress}, you will get an email with instructions on resetting your password.</p>
      <p className='mb-8'>If it doesn't arrive, be sure to check your spam folder.</p>
      <button
        className='block mx-auto text-green'
        onClick={goBackToLogin}
      >Back to Log in
      </button>
    </div>
  )
}

export { EmailMessage }
