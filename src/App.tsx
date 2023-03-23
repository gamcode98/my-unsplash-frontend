/* eslint-disable react/jsx-curly-newline */
import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { ROUTES } from './enums/routes'
import useCurrentUser from './hooks/useCurrentUser'
import { IAlert } from './interfaces/IAlert'
import { ServerResponse } from './interfaces/validate-session.dto'
import { Home } from './routes/Home'
import MySpace from './routes/MySpace'
import { Navigation } from './routes/Navigation'
import { ResetPassword } from './routes/ResetPassword'
import { Settings } from './routes/Settings'
import { get } from './services/privateService'

function App (): JSX.Element {
  const { setCurrentUser } = useCurrentUser()
  const navigate = useNavigate()

  const [alert, setAlert] = useState<IAlert>({
    show: false,
    status: 'success',
    message: ''
  })

  useEffect(() => {
    get<ServerResponse>('/auth/validate')
      .then(({ data }) => {
        const { response: { user } } = data
        setCurrentUser(user)
        navigate(ROUTES.GALLERY)
      }).catch(() => {})
  }, [])

  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<Navigation setAlert={setAlert} />}>
        <Route path={ROUTES.ROOT} element={<Home setAlert={setAlert} alert={alert} />} />
        <Route path={ROUTES.GALLERY} element={<MySpace alert={alert} setAlert={setAlert} />} />
        <Route path={ROUTES.SETTINGS} element={<Settings />} />
      </Route>
      <Route path={ROUTES.RESET_PASSWORD} element={<ResetPassword />} />
    </Routes>

  )
}

export default App
