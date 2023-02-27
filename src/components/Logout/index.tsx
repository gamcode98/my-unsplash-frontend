import useCurrentUser from '../../hooks/useCurrentUser'

const Logout = (): JSX.Element => {
  const { setCurrentUser } = useCurrentUser()

  const handleLogout = (): void => setCurrentUser(null)

  return (
    <button
      className='bg-red text-white px-4 py-2 rounded-lg mb-2 lg:mb-0 hover:-translate-y-0.5 ease-linear duration-100 will-change-transform'
      onClick={handleLogout}
    >Logout
    </button>
  )
}

export { Logout }
