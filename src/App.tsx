/* eslint-disable react/jsx-curly-newline */
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTES } from './enums/routes'
import { IAlert } from './interfaces/IAlert'
import { Home } from './routes/Home'
import MySpace from './routes/MySpace'
import { Navigation } from './routes/Navigation'
import { Settings } from './routes/Settings'

function App (): JSX.Element {
  const [alert, setAlert] = useState<IAlert>({
    show: false,
    status: 'success',
    message: ''
  })

  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<Navigation setAlert={setAlert} />}>
        <Route path={ROUTES.ROOT} element={<Home setAlert={setAlert} alert={alert} />} />
        <Route path={ROUTES.GALLERY} element={<MySpace alert={alert} setAlert={setAlert} />} />
        <Route path={ROUTES.SETTINGS} element={<Settings />} />
      </Route>
    </Routes>

  )
}

export default App
