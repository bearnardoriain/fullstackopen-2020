import React from 'react'

const PersonForm = (props) => {
    return (
        <form onSubmit = {props.addNewName}>
            <div>
                <label>Name: </label>
                <input value = {props.newName} onChange = {props.handleNewName}/>
            </div>
            <div>
                <label>Number: </label>
                <input value = {props.newNumber} onChange = {props.handleNewNumber}/>
            </div>
            <div>
                <button type="submit">Save</button>
            </div>
        </form>
    )
}

export default PersonForm
