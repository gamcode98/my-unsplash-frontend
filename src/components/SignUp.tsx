import AccountCreatedMessage from './AccountCreatedMessage'
import { CreateAccount } from './CreateAccount'

interface Props {
  setHasAccount?: React.Dispatch<React.SetStateAction<boolean>>
  isLoading?: boolean
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>
  setHideLoginWithGoogle: React.Dispatch<React.SetStateAction<boolean>>
  isAccountCreated: boolean
  setIsAccountCreated: React.Dispatch<React.SetStateAction<boolean>>
}

const SignUp = (props: Props): JSX.Element => {
  const { setHasAccount, isLoading, setIsLoading, setHideLoginWithGoogle, isAccountCreated, setIsAccountCreated } = props

  return (
    isAccountCreated
      ? <AccountCreatedMessage setHideLoginWithGoogle={setHideLoginWithGoogle} setIsAccountCreated={setIsAccountCreated} />
      : <CreateAccount
          setHasAccount={setHasAccount}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setHideLoginWithGoogle={setHideLoginWithGoogle}
          setIsAccountCreated={setIsAccountCreated}
        />
  )
}

export { SignUp }
