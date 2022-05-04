import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Jobportal from './jobportal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Jobportal/>
    </div>
  )
}

export default App
