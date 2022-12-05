import { useState } from 'react';

import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

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
    <Button onClick={incrementCount}/>
    <Button onClick={dicrementCount}/>
    <Button onClick={setCount}/>
    <Button onClick={setCount}/>
  </div>
  
}

export default App;
