import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BMRCalculator from './components/BMRCalculator.JSX'
import TDEECalculator from './components/TDEECalculator.JSX'
import CaloriesTable from './components/CaloriesTable.JSX'

function App() {
  const [count, setCount] = useState(0)
  const typeOfFood = 'dairy'
  return (
    <>
      {/* <BMRCalculator></BMRCalculator> */}
      {/* <TDEECalculator></TDEECalculator> */}
      <CaloriesTable typeOfFood={typeOfFood} ></CaloriesTable>
    </>
  )
}

export default App
