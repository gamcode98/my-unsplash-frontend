interface Props {
  email: string
  setHideLogginWithGoogle?: React.Dispatch<React.SetStateAction<boolean>>
}
const EmailMessage = (props: Props): JSX.Element => {
  const { email, setHideLogginWithGoogle } = props

  return (
    <div>
      <p>If an account exists for {email}, you will get an email with instructions on resetting your password.</p>
      <p className='mb-8'>If it doesn't arrive, be sure to check your spam folder.</p>
      <button
        className='block mx-auto text-green'
        onClick={() => setHideLogginWithGoogle?.(false)}
      >Back to Log in
      </button>
    </div>
  )
}

export { EmailMessage }
