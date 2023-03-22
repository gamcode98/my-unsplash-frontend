import { ChangePassword } from '../../components/ChangePassword'
import { DeleteAccount } from '../../components/DeleteAccount'
import { SettingCard } from '../../components/SettingCard'
import useCurrentUser from '../../hooks/useCurrentUser'

const Settings = (): JSX.Element => {
  const { currentUser } = useCurrentUser()

  return (
    <div className='w-11/12 mx-auto'>
      <h2 className='text-2xl mb-4 font-bold'>Personal Account Settings</h2>

      <div className='md:w-3/5 md:mx-auto lg:grid lg:grid-cols-3 lg:gap-8'>
        <SettingCard title='Profile'>
          <p className='uppercase text-sm text-dark-gray mb-3'>Contact email</p>
          <p>{currentUser?.email}</p>
        </SettingCard>

        <SettingCard title='Change password'>
          <ChangePassword />
        </SettingCard>

        <SettingCard title='Delete Account'>
          <DeleteAccount />
        </SettingCard>
      </div>

    </div>
  )
}

export { Settings }
