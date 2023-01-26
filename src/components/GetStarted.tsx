import { useEffect, useState } from 'react'
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
  const [hideLogginWithGoogle, setHideLogginWithGoogle] = useState<boolean>(false)
  const [isAccountCreated, setIsAccountCreated] = useState(false)
  const [toggle, setToggle] = useState<boolean>(false)
  const [isLoading, setIsloading] = useState<boolean>(false)

  const handleCloseModalBtn = (): void => {
    setToggle(prev => !prev)
    handleCloseModal()
  }

  useEffect(() => {
    if (!loginIsPressed) {
      setHasAccount(false)
      setHideLogginWithGoogle(false)
      setIsAccountCreated(false)
    }
  }, [toggle])

  return (
    <>
      <button
        onClick={handleCloseModalBtn}
        disabled={isLoading} className={`absolute top-3 right-3 ${isLoading && 'cursor-wait'}`}
      >
        <img src={xMarkIcon} width={20} />
      </button>

      {!hideLogginWithGoogle && <LoginWithGoogle isLoading={isLoading} />}

      <Account isLoading={isLoading} setIsloading={setIsloading} setHasAccount={setHasAccount}>
        {hasAccount || loginIsPressed
          ? <LoginOrResetPassword
              hideLogginWithGoogle={hideLogginWithGoogle}
              setHideLogginWithGoogle={setHideLogginWithGoogle}
            />
          : <SignUp
              isAccountCreated={isAccountCreated}
              setIsAccountCreated={setIsAccountCreated}
              setHideLogginWithGoogle={setHideLogginWithGoogle}
            />}
      </Account>
    </>
  )
}

export { GetStarted }
