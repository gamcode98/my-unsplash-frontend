import AccountCreatedMessage from './AccountCreatedMessage'
import { CreateAccount } from './CreateAccount'

interface Props {
  setHasAccount?: React.Dispatch<React.SetStateAction<boolean>>
  isLoading?: boolean
  setIsloading?: React.Dispatch<React.SetStateAction<boolean>>
  setHideLogginWithGoogle: React.Dispatch<React.SetStateAction<boolean>>
  isAccountCreated: boolean
  setIsAccountCreated: React.Dispatch<React.SetStateAction<boolean>>
}

const SignUp = (props: Props): JSX.Element => {
  const { setHasAccount, isLoading, setIsloading, setHideLogginWithGoogle, isAccountCreated, setIsAccountCreated } = props

  return (
    isAccountCreated
      ? <AccountCreatedMessage setHideLogginWithGoogle={setHideLogginWithGoogle} setIsAccountCreated={setIsAccountCreated} />
      : <CreateAccount
          setHasAccount={setHasAccount}
          isLoading={isLoading}
          setIsloading={setIsloading}
          setHideLogginWithGoogle={setHideLogginWithGoogle}
          setIsAccountCreated={setIsAccountCreated}
        />
  )
}

export { SignUp }
