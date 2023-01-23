import { useEffect } from 'react'
import { IAlert } from '../interfaces/IAlert'
import checkedIcon from './../assets/checked.svg'
import failIcon from './../assets/fail.svg'

interface Props {
  alert: IAlert
  setAlert: React.Dispatch<React.SetStateAction<IAlert>>
}

const Alert = (props: Props): JSX.Element => {
  const { alert, setAlert } = props

  useEffect(() => {
    if (alert.show) {
      const timeoutId = setTimeout(() => {
        setAlert(prevAlert => ({ ...prevAlert, show: false }))
      }, 5000)

      return () => clearTimeout(timeoutId)
    }
  }, [alert.show, setAlert])

  const icons = {
    success: checkedIcon,
    error: failIcon
  }

  const background = {
    success: 'bg-green',
    error: 'bg-red'
  }

  return (
    <div className={`fixed bottom-4 left-4 lg:left-20 text-white p-4 rounded-md font-noto-sans flex items-center gap-2 
     ${background[alert.status]} ${alert.show ? 'block' : 'hidden'}`}
    >
      <img src={icons[alert.status]} width={20} />
      <span>{alert.message}</span>
    </div>
  )
}

export { Alert }
