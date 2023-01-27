interface Props {
  setHideLoginWithGoogle: React.Dispatch<React.SetStateAction<boolean>>
  setIsAccountCreated: React.Dispatch<React.SetStateAction<boolean>>
}

const AccountCreatedMessage = (props: Props): JSX.Element => {
  const { setHideLoginWithGoogle, setIsAccountCreated } = props

  const backToLogin = (): void => {
    setHideLoginWithGoogle(false)
    setIsAccountCreated(false)
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

export default AccountCreatedMessage
