import AccountCreatedMessage from './AccountCreatedMessage'
import { CreateAccount } from './CreateAccount'

interface Props {
  setHasAccount?: React.Dispatch<React.SetStateAction<boolean>>
  isLoading?: boolean
  setIsloading?: React.Dispatch<React.SetStateAction<boolean>>
  isAccountCreated: boolean
  setIsAccountCreated: React.Dispatch<React.SetStateAction<boolean>>
}

const SignUp = (props: Props): JSX.Element => {
  const { setHasAccount, isLoading, setIsloading, isAccountCreated, setIsAccountCreated } = props

  return (
    <>
      {isAccountCreated
        ? <AccountCreatedMessage />
        : <CreateAccount
            setHasAccount={setHasAccount}
            isLoading={isLoading}
            setIsloading={setIsloading}
            setIsAccountCreated={setIsAccountCreated}
          />}
    </>
  )
}

export { SignUp }
