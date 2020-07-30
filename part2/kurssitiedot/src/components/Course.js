import React from 'react'

/* exercise 2.1 */
const Course = ({ course }) => {
    return (
        <div>
            <Header course = {course} />
            <Content course = {course} />
            <Total course = {course} />
        </div>
    )
}

const Header = ({ course }) => {
    return (
        <h1>
            {course.name}
        </h1>
    )
}

/* exercise 2.1 */
const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map(part => <Part key = {part.id} name = {part.name} exercises = {part.exercises} />)}
        </div>
    )
}

const Total = ({ course }) => {
    /* exercise 2.2 */
    const sum = course.parts.map(course => course.exercises)
    /* initialise */
    /* const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises */
    return (
        <p>
            Number of exercises {sum}
            console.log(sum)
        </p>
    )
}

const Part = (props) => {
    return (
        <p>
            {/* {props.part.name} {props.part.exercises} */}
            {props.name} {props.exercises}
        </p>
    )
}

/* initialised */
/* const Content = ({ course }) => {
    return (
        <div>
            <Part part={course.parts[0]} />
            <Part part={course.parts[1]} />
            <Part part={course.parts[2]} />
        </div>
    )
} */

export default Course