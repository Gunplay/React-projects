import './App.css'
import Wrapper from './componets/Wrapper'

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h2>Text Insaid of the Wrapper</h2>
        <button>Click me!</button>
      </Wrapper>

      <Wrapper color="lightgreen">
        <h2>Hello form React</h2>
        <button>Click me!</button>
        <p>Some description</p>
        <input type="text" placeholder="write"></input>
      </Wrapper>
    </div>
  )
}

export default App
