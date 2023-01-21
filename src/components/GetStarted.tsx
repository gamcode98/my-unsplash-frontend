import { useState } from 'react'
import googleIcon from './../assets/google.svg'
import { Login } from './Login'
import { SignUp } from './SignUp'

const GetStarted = (): JSX.Element => {
  const [hasAccount, setHasAccount] = useState<boolean>(false)

  return (
    <div>
      <button className='border border-light-gray px-4 py-2 mb-4 rounded-md w-full flex items-center justify-center gap-2 hover:-translate-y-0.5 ease-linear duration-100 will-change-transform'>
        <img src={googleIcon} width={15} />
        <span>Continue with Google</span>
      </button>
      <p className='text-center text-dark-gray mb-4'>or</p>
      {hasAccount
        ? <Login setHasAccount={setHasAccount} />
        : <SignUp setHasAccount={setHasAccount} />}
    </div>
  )
}

export { GetStarted }
