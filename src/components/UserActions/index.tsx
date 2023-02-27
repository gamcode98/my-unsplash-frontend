import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useCurrentUser from '../../hooks/useCurrentUser'
import chevrondownIcon from './../../assets/chevron-down.svg'
import settingsIcon from './../../assets/settings.svg'
import logoutIcon from './../../assets/logout.svg'
import uploadIcon from './../../assets/upload.svg'

interface Props {
  handleOpenModalAddImage: () => void
}

const UserActions = (props: Props): JSX.Element => {
  const { handleOpenModalAddImage } = props

  const { setCurrentUser } = useCurrentUser()

  const navigate = useNavigate()

  const [toggle, setToggle] = useState<boolean>(false)

  const handleToggle = (): void => {
    setToggle(prev => !prev)
  }

  const handleLogout = (): void => {
    setCurrentUser(null)
    navigate('/')
  }

  return (
    <div className='relative'>
      <div className='flex items-center gap-2'>
        <img
          src='https://robohash.org/random'
          alt='Avatar'
          className='rounded-full bg-light-gray'
          width={40}
        />
        <button onClick={handleToggle}>
          <img src={chevrondownIcon} className={`${toggle ? 'rotate-180' : 'rotate-0'} transition ease-in-out delay-75 will-change-transform`} width={20} />
        </button>
      </div>

      <div className={`absolute right-0 top-14 bg-white shadow-md rounded-md
            ${toggle ? 'block' : 'hidden'}`}
      >
        <button className='flex items-center gap-2 mb-2 border-b border-b-light-gray p-4 pr-10'>
          <img src={settingsIcon} width={20} />
          <span>Settings</span>
        </button>
        <button
          className='md:hidden flex items-center gap-2 p-4 border-b border-b-light-gray pr-5'
          onClick={handleOpenModalAddImage}
        >
          <img src={uploadIcon} width={20} />
          <span>Add a photo</span>
        </button>
        <button
          className='flex items-center gap-2 p-4 pr-10'
          onClick={handleLogout}
        >
          <img src={logoutIcon} width={20} />
          <span className='text-red'>Logout</span>
        </button>
      </div>
    </div>
  )
}

export { UserActions }
