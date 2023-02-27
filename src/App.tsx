/* eslint-disable react/jsx-curly-newline */
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { IAlert } from './interfaces/IAlert'
import { IImage } from './interfaces/IImage'
import { Home } from './routes/Home'
import MySpace from './routes/MySpace'
import { Navigation } from './routes/Navigation'

const fakeImages: IImage[] = [
  {
    _id: crypto.randomUUID(),
    photoUrl: 'https://picsum.photos/600/500?random=1',
    label: 'Hola que tal??'
  },
  {
    _id: crypto.randomUUID(),
    photoUrl: 'https://picsum.photos/800/400?random=2',
    label: 'Mañana es un nuevo día'
  },
  {
    _id: crypto.randomUUID(),
    photoUrl: 'https://picsum.photos/400/400?random=3',
    label: 'Que onda che???'
  },
  {
    _id: crypto.randomUUID(),
    photoUrl: 'https://picsum.photos/900/700?random=4',
    label: 'A random image :D'
  },
  {
    _id: crypto.randomUUID(),
    photoUrl: 'https://picsum.photos/500/700?random=5',
    label: 'Pepe y moni xd'
  },
  {
    _id: crypto.randomUUID(),
    photoUrl: 'https://picsum.photos/500/800?random=6',
    label: 'Testing this...'
  }
]

function App (): JSX.Element {
  const [images, setImages] = useState<IImage[]>(fakeImages)
  const [searchResults, setSearchResults] = useState(fakeImages)
  const [alert, setAlert] = useState<IAlert>({
    show: false,
    status: 'success',
    message: ''
  })

  return (
    <Routes>
      <Route
        path='/'
        element={
          <Navigation
            setAlert={setAlert}
            images={images}
            setImages={setImages}
            setSearchResults={setSearchResults}
          />}
      >
        <Route path='/' element={<Home />} />
        <Route
          path='/my-space'
          element={
            <MySpace
              alert={alert}
              setAlert={setAlert}
              images={images}
              setImages={setImages}
              searchResults={searchResults}
            />}
        />
      </Route>
    </Routes>

  )
}

export default App
