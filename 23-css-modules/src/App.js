import './App.css'
import Info from './componets/Info'

function App() {
  return (
    <div className="App">
      <Info />
      {/* без модульной системы классы работают глобально, для всех компонентов */}
      {/* По этому нужно делать по селектору class, что webpack сгенирировал uniq name for the class  */}
      <div className="info">
        <h1>App component heading</h1>
        <h2>Heading in the App</h2>
        <button className="my-button">Click me</button>
      </div>
    </div>
  )
}

export default App
