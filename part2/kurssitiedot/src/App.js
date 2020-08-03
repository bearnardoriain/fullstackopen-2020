import React from 'react';
import Course from './components/Course'

const App = () => {
    /* exercises 2.1 to 2.3 */
    /* const course = {
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
    } */

    /* exercise 2.4 */
    const courses = [
        {
            name: 'Half stack application development',
            id: 1,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]

    let kuursit = courses.map(course => <Course course = {course} />)

    return (
        <div>
            {/* exercises 2.1, 2.2 and 2.3 */}
            {/* <Course course = {course} /> */}
            {/* exercise 2.4 */}
            <h1>
                Web development curriculum
            </h1>
            {kuursit}
        </div>
    )
}

export default App