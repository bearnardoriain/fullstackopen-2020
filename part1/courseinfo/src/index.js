import React from 'react'
import ReactDOM from 'react-dom'

// similar to Header in exercise 1.1
const Header = ({course}) => (
  <h1>
    {course}
  </h1>
)
// similar to Content in exercise 1.1
const Part = ({part_name, number_of_exercises}) => (
  <p>
    {part_name} {number_of_exercises}
  </p>
)

/* each (part*) and (exercises*) is a Part,
  therefore the Parts can be stored as an array in
  the App component
  in JavaScript, the array can be looped through
  using the map() function */
const Content = ({parts}) => (
  parts.map(part => (
      // name of each Part used as identifier
      <Part key = {part.part_name}
      part_name = {part.part_name}
      number_of_exercises = {part.number_of_exercises} />
    )
  )
)

/* addition method, used for adding
  number_of_exercises in Total */
const add = (a, b) => a + b

const Total = ({parts}) => (
  <p>
    Number of exercises {parts.map(part => part.number_of_exercises).reduce(add)}
  </p>
)

const App = () => {
  const course = {
    name: 'Half-stack application development',
    parts: [
      {part_name: 'Fundamentals of React', number_of_exercises: 10},
      {part_name: 'Using props to pass data', number_of_exercises: 7},
      {part_name: 'State of a component', number_of_exercises: 14}
    ]
  }

  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}

ReactDOM.render(
  <App />, document.getElementById('root')
)