import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course';

const Header = ({ course }) => {
    return (
        <h1>
            {course.name}
        </h1>
    )
}

const Total = ({ course }) => {
    const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
    return (
        <p>
            Number of exercises {sum}
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

/* exercise 2.1 */
const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map(part => <Part key = {part.id} name = {part.name} exercises = {part.exercises} />)}
        </div>
    )
}

const App = () => {
    const course = {
        name: 'Half stack application development',
        id: 1,
        parts: [
            {
                name: 'Fundamentals of React',
                id: 1,
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                id: 2,
                exercises: 7
            },
            {
                name: 'State of a component',
                id: 3,
                exercises: 14
            }
        ]
    }

    return (
        <div>
            {/* initialised */}
            {/* <Header course={course} />
            <Content course={course} />
            <Total course={course} /> */}
            {/* exercise 2.1 */}
            <Course course = {course} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))