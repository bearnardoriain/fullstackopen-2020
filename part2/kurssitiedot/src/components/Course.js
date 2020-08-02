import React from 'react'
import Content from './Content'
import Header from './Header'
import Total from './Total'

/* exercises 2.1 to 2.3 */
/* const Course = ({course}) => {
    return (
        <div>
            <Header course = {course} />
            <Content course = {course} />
            <Total course = {course} />
        </div>
    )
} */

/* exercise 2.4 */
const Course = ({ course }) => {
    return (
        <div>
            <Header course = {course.name} />
            <Content parts = {course.parts} />
            <Total parts = {course.parts} />
        </div>
    )
}

export default Course