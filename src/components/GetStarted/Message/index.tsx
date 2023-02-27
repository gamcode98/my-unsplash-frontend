import { AuthenticationNavigation } from '../../../types/AuthenticationNavigation'

interface Props {
  setHideLoginWithGoogle?: React.Dispatch<React.SetStateAction<boolean>>
  setAuthNavigation?: React.Dispatch<React.SetStateAction<AuthenticationNavigation>>
}

const Message = (props: Props): JSX.Element => {
  const { setHideLoginWithGoogle, setAuthNavigation } = props

  const backToLogin = (): void => {
    setHideLoginWithGoogle?.(false)
    setAuthNavigation?.('login')
  }

  return (
    <div>
      <h2 className='font-bold text-3xl text-center mb-8'>Your account was <br /> created successfully</h2>
      <button
        onClick={backToLogin}
        className='block mx-auto text-green'
      >Back to Log in
      </button>
    </div>
  )
}

export { Message }
