import React from 'react'

const Filter = ({filter, handleFilter}) => {
    return (
        <form>
            <div>
                <label>Search: </label>
                <input value = {filter} onChange = {handleFilter}/>
            </div>
        </form>
    )
}

export default Filter