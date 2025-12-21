import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './assets/pages/LoginPage'
import Login2 from './assets/pages/Login2.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LoginPage />
    </>
  )
}

export default App
