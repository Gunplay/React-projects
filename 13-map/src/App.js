import { useState } from 'react';

import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

const signs = ['+', '-', '/', '*', 'Press me', 'Click me']

function App() {
  console.log('App rendered');
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
    console.log(count);
  }
  const dicrementCount = () => setCount(count - 1)
  // console.log(count);
  return <div className="App">
    {/* Передача func из App count как свойство 
    и мы можем влиять спомощью свойства из дочернего компонента на изменение состояния в род компоненте 
    спомощью свойства*/}
    <Counter count = {count}/>
    {signs.map((sign, index) => {
      console.log(sign);
      console.log(index)
     return <Button onClick={incrementCount} sign={sign} key={index}/>
    })}
    {/* {[
      <Button onClick={incrementCount } text={signs[0]}/>,
      <Button onClick={incrementCount } text={signs[1]}/>,
      <Button onClick={incrementCount } text={signs[2]}/>,
      <Button onClick={incrementCount } text={signs[3]}/>,
      <Button onClick={incrementCount } text={signs[4]}/>,
      <Button onClick={incrementCount } text={signs[5]}/>
    ]} */}
    {/* <Button onClick={incrementCount} text={signs[0]}/>
    <Button onClick={dicrementCount} text={signs[1]}/>
    <Button onClick={setCount} text={signs[2]}/>
    <Button onClick={setCount} text={signs[3]}/> */}
  </div>
  
}

export default App;
