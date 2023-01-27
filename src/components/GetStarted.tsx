import { useState } from 'react'
import xMarkIcon from './../assets/x-mark.svg'
import { Account } from './Account'
import { LoginOrResetPassword } from './LoginOrResetPassword'
import { LoginWithGoogle } from './LoginWithGoogle'
import { SignUp } from './SignUp'

interface Props {
  loginIsPressed?: boolean
  handleCloseModal: () => void
}

const GetStarted = (props: Props): JSX.Element => {
  const { loginIsPressed, handleCloseModal } = props

  const [hasAccount, setHasAccount] = useState<boolean>(false)
  const [hideLoginWithGoogle, setHideLoginWithGoogle] = useState<boolean>(false)
  const [isAccountCreated, setIsAccountCreated] = useState(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleCloseModalBtn = (): void => {
    setHasAccount(false)
    setHideLoginWithGoogle(false)
    setIsAccountCreated(false)
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

      <Account isLoading={isLoading} setIsLoading={setIsLoading} setHasAccount={setHasAccount}>
        {hasAccount || loginIsPressed
          ? <LoginOrResetPassword
              hideLoginWithGoogle={hideLoginWithGoogle}
              setHideLoginWithGoogle={setHideLoginWithGoogle}
            />
          : <SignUp
              isAccountCreated={isAccountCreated}
              setIsAccountCreated={setIsAccountCreated}
              setHideLoginWithGoogle={setHideLoginWithGoogle}
            />}
      </Account>
    </>
  )
}

export { GetStarted }
