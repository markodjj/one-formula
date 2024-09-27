import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BMRCalculator from './components/BMRCalculator.JSX'
import TDEECalculator from './components/TDEECalculator.JSX'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <BMRCalculator></BMRCalculator> */}
      <TDEECalculator></TDEECalculator>
    </>
  )
}

export default App
