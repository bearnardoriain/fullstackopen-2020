import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')
  
  // exercise 2.6
  const addNewName = (event) => {
    // prevent default action of submitting HTML forms
    event.preventDefault()
    // example: newName is 'Arto Hellas'
    const newPerson = {
      name: newName
    }
    // create new copy of persons in which to store new name
    setPersons(persons.concat(newPerson))
    // reset newName
    setNewName('')
    console.log('new contact created')
  }

  // exercise 2.6
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  // exercise 2.6
  const Person = ({ person }) => {
    return (
    <li>
      {person.name}
    </li>
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <form onSubmit = {addNewName}>
          <div>
            Name: <input value = {newName} onChange = {handleNameChange}/>
          </div>
          <div>
            <button type="submit">Save</button>
          </div>
        </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <Person person = {person} key = {person.name} />)}
      </ul>
    </div>
  )
}

export default App
