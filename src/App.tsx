import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const COMPONENT_DATA = [
  {}
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>FoundationsUI</h1>
      <p>This project is a journey back to basics, exploring the craftsmanship behind each component</p>
      <a href='components/hover-card'>Hover Card</a>
    </>
  )
}

export default App
