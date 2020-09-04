import React from 'react'

const Filter = ({value, onChange}) => {
    return (
        <form>
            <div>
                Search: <input value = {value} onChange = {onChange}/>
            </div>
        </form>
    )
}

export default Filter