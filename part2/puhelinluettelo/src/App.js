import React, { useState , useEffect } from 'react'
/* exercise 2.8 */
/* import Person from './components/Person' */
/* exercise 2.10 */
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Phonebook from './components/Phonebook'
/* exercise 2.11 */
import axios from 'axios'

const App = () => {
  // exercises 2.6 and 2.7
  // const [ persons, setPersons ] = useState([
  //   { name: `Arto Hellas` }
  // ])
  // exercise 2.8
  /* const [ persons, setPersons ] = useState([
    { id: 1, name: `Arto Hellas`, number: '040-1234567'},
    // exercise 2.9*
    { id: 2, name: `Ada Lovelace`, number: `39-44-5323523`},
    { id: 3, name: `Dan Abramov`, number: `12-43-234345`},
    { id: 4, name: `Mary Poppendieck`, number: `39-23-6423122` },
    // exercise 2.9*++
    { id: 5, name: `Martti Tienari`, number: `+358-457-555-1868`},
    { id: 6, name: `Arto Järvinen`, number: `+358-500-555-8863`},
    { id: 7, name: `Lea Kutvonen`, number: `+358-505-556-2280`},
  ]) */
  /* exercise 2.11 */
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  /* exercise 2.8 */
  const [ newNumber, setNewNumber ] = useState('')
  /* exercise 2.9* */
  const [ filter, setFilter ] = useState('')
  
  /* exercise 2.11(i) */
  axios.get('http://localhost:3002/persons').then(
    response => {
      ReactDOM.render(
        <App persons = {response.data}/>, document.getElementById('root')
      )
    }
  )

  /* exercise 2.11(ii) */
  useEffect(() => {
    console.log('effect')
    axios.get('http://localhost:3002/persons').then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    })
  }, [])

  /* exercise 2.6 */
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

  /* exercise 2.6 */
  const handleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  /* exercise 2.8 */
  const handleNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  /* exercise 2.9* – filter handler */
  const handleFilter = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }
  /* exercise 2.9* – results definition: check filter input against names already in phonebook */
  const results = !filter ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Search</h2>
        {/* exercises 2.6 to 2.9* */}
        {/* <form>
          <div>
            Search: <input value = {filter} onChange = {handleFilter}/>
          </div>
        </form> */}
        {/* exercise 2.10 */}
        <Filter filter = {filter} handleFilter = {handleFilter}/>
      <h2>Add contact</h2>
        {/* exercises 2.6 to 2.9 */}
        {/* <form onSubmit = {addNewName}>
          <div>
            Name: <input value = {newName} onChange = {handleNewName}/>
          </div>
          <div>
            Number: <input value = {newNumber} onChange = {handleNewNumber}/>
          </div>
          <div>
            <button type="submit">Save</button>
          </div>
        </form> */}
        <PersonForm persons = {persons} setPersons = {setPersons} addNewName = {addNewName} name = {newName} handleNewName = {handleNewName}number = {newNumber} handleNewNumber = {handleNewNumber}/>
      <h2>List</h2>
        {/* exercises 2.6 to 2.9* */}
        {/* <ul> */}
          {/* exercises 2.6 to 2.8 – show all results */}
          {/* {persons.map(person => <Person person = {person} key = {person.name} number = {person.number}/>)} */}
          {/* exercise 2.9* – show all results by default, else show filtered results */}
          {/* {results.map(person => <Person person = {person} key = {person.name} number = {person.number}/>)} */}
        {/* </ul> */}
        {/* exercise 2.10* */}
        <Phonebook persons = {results} filter = {filter}/>
    </div>
  )
}

export default App