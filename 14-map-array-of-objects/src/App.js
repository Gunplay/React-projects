import './App.css'
import persons from './data/persons'
import Person from './components/Person'

function App({}) {
  return (
    <div className="App">
      {persons.map((person, i) => {
        const { id, firstName, lastName, email, img } = person
        return (
          <Person
            person={person}
            // id={id}
            // firstName={firstName}
            // lastName={lastName}
            // email={email}
            // img={img}
          />
        )
      })}
    </div>
  )
}

export default App
