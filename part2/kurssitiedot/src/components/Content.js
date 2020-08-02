import React from 'react'
import Part from './Part'

/* exercise 2.1 */
const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map(part => <Part key = {part.id} name = {part.name} exercises = {part.exercises} />)}
        </div>
    )
}

export default Content