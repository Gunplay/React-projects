import { useState } from 'react';

import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

const conditionals = ['+', '-', '/', '*']

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
    <Button onClick={incrementCount} text={conditionals[0]}/>
    <Button onClick={dicrementCount} text={conditionals[1]}/>
    <Button onClick={setCount} text={conditionals[2]}/>
    <Button onClick={setCount} text={conditionals[3]}/>
  </div>
  
}

export default App;
