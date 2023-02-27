interface Props {
  title: string
  children: JSX.Element | JSX.Element[]
}

const SettingCard = (props: Props): JSX.Element => {
  const { title, children } = props
  return (
    <div className='border border-light-gray rounded-md p-6 mb-4'>
      <h3 className='text-xl font-bold border-b border-b-light-gray pb-6 mb-6'>{title}</h3>
      {children}
    </div>
  )
}

export { SettingCard }
