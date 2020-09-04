import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  // exercises 2.6 and 2.7
  // const [ persons, setPersons ] = useState([
  //   { name: `Arto Hellas` }
  // ])
  // exercise 2.8
  const [ persons, setPersons ] = useState([
    { name: `Arto Hellas`, number: '040-1234567'},
    // exercise 2.9
    { name: `Ada Lovelace`, number: `39-44-5323523`},
    { name: `Dan Abramov`, number: `12-43-234345`},
    { name: `Mary Poppendieck`, number: `39-23-6423122` },
    // exercise 2.9++
    { name: `Martti Tienari`, number: `+358-457-555-1868`},
    { name: `Arto Järvinen`, number: `+358-500-555-8863`},
    { name: `Lea Kutvonen`, number: `+358-505-556-2280`},
  ])
  const [ newName, setNewName ] = useState('')
  // exercise 2.8
  const [ newNumber, setNewNumber ] = useState('')
  // exercise 2.9
  const [ filter, setFilter ] = useState('')
  
  // exercise 2.6
  const addNewName = (event) => {
    // prevent default action of submitting HTML forms
    event.preventDefault()
    // exercise 2.7
    if (persons.map(person => person.name).includes(newName)) {
      window.alert(`${newName} has already been added to the phonebook.`)
    } else {
      // example: first newName is 'Arto Hellas'
      const newPerson = {
        name: newName, number: newNumber
      }
      // create new copy of persons in which to store new name
      setPersons(persons.concat(newPerson))
      // reset newName to add new contacts
      setNewName('')
      // reset newNumber to add new contacts
      setNewNumber('')
      // reset filter to include new contact
      setFilter('')
      console.log('new contact created')
    }
  }

  // exercise 2.6
  const handleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  // exercise 2.8
  const handleNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  // exercise 2.9
  const handleFilter = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }
  const results = !filter ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
        <form>
          <div>
            Search: <input value = {filter} onChange = {handleFilter}/>
          </div>
        </form>
      <h2>Add contact</h2>
        <form onSubmit = {addNewName}>
          <div>
            Name: <input value = {newName} onChange = {handleNewName}/>
          </div>
          <div>
            Number: <input value = {newNumber} onChange = {handleNewNumber}/>
          </div>
          <div>
            <button type="submit">Save</button>
          </div>
        </form>
      <h2>Numbers</h2>
      <ul>
        {results.map(person => <Person person = {person} key = {person.name} number = {person.number}/>)}
      </ul>
    </div>
  )
}

export default App