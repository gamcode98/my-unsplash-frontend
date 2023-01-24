import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { IAlert } from './interfaces/IAlert'
import { IImage } from './interfaces/IImage'
import { Home } from './routes/Home/Home'
import MySpace from './routes/MySpace/MySpace'
import { Navigation } from './routes/Navigation/Navigation'

const fakeImages: IImage[] = [
  {
    _id: crypto.randomUUID(),
    photoUrl: 'https://picsum.photos/600/500?random=1',
    label: 'A random image 1'
  },
  {
    _id: crypto.randomUUID(),
    photoUrl: 'https://picsum.photos/800/400?random=2',
    label: 'A random image 2'
  },
  {
    _id: crypto.randomUUID(),
    photoUrl: 'https://picsum.photos/400/400?random=3',
    label: 'A random image 3'
  },
  {
    _id: crypto.randomUUID(),
    photoUrl: 'https://picsum.photos/900/700?random=4',
    label: 'A random image 4'
  },
  {
    _id: crypto.randomUUID(),
    photoUrl: 'https://picsum.photos/500/700?random=5',
    label: 'A random image 5'
  },
  {
    _id: crypto.randomUUID(),
    photoUrl: 'https://picsum.photos/500/800?random=6',
    label: 'A random image 6'
  }
]

function App (): JSX.Element {
  const [images, setImages] = useState<IImage[]>(fakeImages)
  const [alert, setAlert] = useState<IAlert>({
    show: false,
    status: 'success',
    message: ''
  })

  return (
    <Routes>
      <Route path='/' element={<Navigation setAlert={setAlert} images={images} setImages={setImages} />}>
        <Route
          path='/'
          element={<MySpace alert={alert} setAlert={setAlert} images={images} setImages={setImages} />}
        />
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>

  )
}

export default App
