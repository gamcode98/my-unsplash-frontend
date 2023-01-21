import { Route, Routes } from 'react-router-dom'
import { Home } from './routes/Home/Home'
import MySpace from './routes/MySpace/MySpace'
import { Navigation } from './routes/Navigation/Navigation'

function App (): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='/' element={<MySpace />} />
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>

  )
}

export default App
