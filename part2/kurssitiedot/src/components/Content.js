import React from 'react'
import Part from './Part'

/* exercises 2.1, 2.2 and 2.3 */
/* const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map(
                part => <Part key = {part.id} 
                name = {part.name} 
                exercises = {part.exercises} />)}
        </div>
    )
} */

/* exercise 2.4 */
const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(
                part => <Part key = {part.id}
                name = {part.name}
                exercises = {part.exercises} />)}
        </div>
    )
}

export default Content