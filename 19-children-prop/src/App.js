import './App.css'
import Wrapper from './componets/Wrapper'
import ModalWindow from './componets/ModalWindow'

function App() {
  const styleButtton = {
    backgroundColor: 'orange',
    width: '100px',
    height: '60px',
    color: 'dark',
    margin: '20px auto',
  }
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h2>Text Insaid of the Wrapper</h2>
        <button>Click me!</button>
      </Wrapper>

      <Wrapper color="lightgreen">
        <h2>Hello form React</h2>
        <button style={styleButtton}>Click me!</button>
        <p>Some description</p>
        <input type="text" placeholder="write"></input>
      </Wrapper>

      <ModalWindow>
        <button type="button" style={styleButtton}>
          Open Window
        </button>
        <button type="button" style={styleButtton}>
          Clouse Window
        </button>
      </ModalWindow>
    </div>
  )
}

export default App
