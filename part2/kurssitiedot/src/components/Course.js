import React from 'react'

/* exercise 2.1 */
const Course = ({ course }) => {
    return (
        <div>
            <Header course = {course} />
            <Content course = {course} />
        </div>
    )
}

export default Course