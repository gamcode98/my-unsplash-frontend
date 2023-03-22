import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ImagesProvider } from './context/ImagesContext'
import { UserProvider } from './context/UserContext'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <ImagesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ImagesProvider>
    </UserProvider>
  </React.StrictMode>
)
