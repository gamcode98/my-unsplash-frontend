interface Props {
  setHasAccount: React.Dispatch<React.SetStateAction<boolean>>
}

const Login = (props: Props): JSX.Element => {
  const { setHasAccount } = props
  const changeToSignUp = (): void => setHasAccount(false)

  return (
    <form>
      <label htmlFor='email' className='block w-full mb-4'>
        <input
          type='text' id='email' placeholder='Email'
          className='border border-light-gray rounded-md p-2 focus:outline-none focus:border-black w-full'
        />
      </label>
      <label htmlFor='password' className='block w-full'>
        <input
          type='password' id='password' placeholder='Password'
          className='border border-light-gray rounded-md p-2 focus:outline-none focus:border-black mb-4 w-full'
        />
      </label>
      <button className='bg-black font-bold text-white p-2 rounded-md w-full mb-4'>Log in</button>
      <p className='text-center mb-4 text-green hover:underline decoration-1 cursor-pointer'>Reset password</p>
      <p className='text-center'>No account? <span className='text-green hover:underline decoration-1 cursor-pointer' onClick={changeToSignUp}>Create one</span></p>
    </form>
  )
}

export { Login }
