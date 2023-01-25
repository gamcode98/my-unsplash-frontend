interface Props {
  email: string
  setResetPasswordIsPressed?: React.Dispatch<React.SetStateAction<boolean>>
}
const EmailMessage = (props: Props): JSX.Element => {
  const { email, setResetPasswordIsPressed } = props

  return (
    <div>
      <p>If an account exists for {email}, you will get an email with instructions on resetting your password.</p>
      <p className='mb-8'>If it doesn't arrive, be sure to check your spam folder.</p>
      <button
        className='block mx-auto text-green'
        onClick={() => setResetPasswordIsPressed?.(false)}
      >Back to Log in
      </button>
    </div>
  )
}

export { EmailMessage }
