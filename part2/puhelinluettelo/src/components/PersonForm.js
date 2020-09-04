import React from 'react'

const PersonForm = (props) => {
    return (
        <form onSubmit = {props.addNewName}>
            <div>
                Name: <input value = {props.newName} onChange = {props.handleNewName}/>
            </div>
            <div>
                Number: <input value = {props.newNumber} onChange = {props.handleNewNumber}/>
            </div>
            <div>
                <button type="submit">Save</button>
            </div>
        </form>
    )
}

export default PersonForm
