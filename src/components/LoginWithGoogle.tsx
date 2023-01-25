import googleIcon from './../assets/google.svg'

interface Props {
  isLoading: boolean
}

const LoginWithGoogle = (props: Props): JSX.Element => {
  const { isLoading } = props

  return (
    <>
      <button
        className={`border border-light-gray px-4 py-2 mb-4 rounded-md w-full flex items-center justify-center gap-2 hover:-translate-y-0.5 ease-linear duration-100 will-change-transform ${isLoading && 'cursor-wait hover:translate-y-0'}`}
        disabled={isLoading}
      >
        <img src={googleIcon} width={15} />
        <span>Continue with Google</span>
      </button>
      <p className='text-center text-dark-gray mb-4'>or</p>
    </>
  )
}

export { LoginWithGoogle }
