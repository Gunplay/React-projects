import persons from '../data/persons'
import Person from './Person'

function Persons() {
  return (
    <div className="cards">
      {persons.map((person, i) => {
        console.log(person)
        // const { id, firstName, lastName, email, img } = person
        return (
          <Person
            // person={person} // избыточная инфа, передавать все свойства!
            // id={id}
            // firstName={firstName}
            // lastName={lastName}
            // email={email}
            // img={img}
            {...person}
            key={person.id}
          />
        )
      })}
    </div>
  )
}

export default Persons
