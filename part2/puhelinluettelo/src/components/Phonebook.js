import React from 'react'
import Person from './Person'

const Phonebook = ({persons, filter}) => {
    // exercise 2.9* – results definition: check filter input against names already in phonebook
    const results = !filter ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <ul>
            {/* exercise 2.9* – show all results by default, else show filtered results */}
            {/* {results.map(person => <Person person = {person} key = {person.name} number = {person.number}/>)} */}
            {results.map(person => <Person person = {person} key = {person.id} name = {person.name} number = {person.number}/>)}
        </ul>
    )
}

export default Phonebook