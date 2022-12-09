import { useState } from 'react'

import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'
import Reset from './components/Reset'

function App() {
  // SECOND
  console.log('App rendered')
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
    console.log(count)
  }
  const dicrementCount = () => setCount(count - 1)
  const devide = () => setCount(count / 2)
  // console.log(count);
  const buttonStyle = { backgroundColor: 'lightgreen' }

  const resetCount = () => {
    setCount(0) // FIRST
  }

  // THIRD
  return (
    <div className="App">
      {/* Передача func из App count как свойство 
    и мы можем влиять спомощью свойства из дочернего компонента на изменение состояния в род компоненте 
    спомощью свойства*/}
      <Counter count={count} style={{ backgroundColor: 'orange' }} />
      <Button onClick={incrementCount} signPlus="+" />
      <Button onClick={dicrementCount} signMinus="-" />
      <Button onClick={devide} signDevide="/" />
      <Reset />

      {/* <Button onClick={setCount} />
      <Button onClick={setCount} /> */}
    </div>
  )
}

export default App
