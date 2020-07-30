import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course';

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
            },
            {
                name: 'Redux',
                id: 4,
                exercises: 11
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