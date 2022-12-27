import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    // {hash: "#test", key: "defaulocationlt", pathname: "…} - Router
    // hash
    // :
    // "#test"
    // key
    // :
    // "defaulocationlt"
    // pathname
    // :
    // "/react-router"
    // search
    // :
    // "?=react"
    // state
    // :
    // null
    // new entry
    // :
    // ""
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="about" element={<h1>About</h1>} />
          <Route path="contacts" element={<h1>Contacts</h1>} />
          <Route path="*" element={<h1>Not Found 404</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
