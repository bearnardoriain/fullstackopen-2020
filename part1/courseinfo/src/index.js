import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  <h1>
    {props.name}
  </h1>
}

const Part = (props) => {
  <p>
    {props.part} {props.exercises}
  </p>
}

/* exercise 1.1
const Part = (props) => {
  <p>
    {props.part} {props.exercises}
  </p>
} */

const Content = (props) => {
  return (
    <div>
      <Part part = {props.part1} exercises = {props.exercises1}/>
      <Part part = {props.part2} exercises = {props.exercises2}/>
      <Part part = {props.part3} exercises = {props.exercises3}/>
    </div>
  )
}

const Total = (props) => {
  <p>
    {props.total}
  </p>
}

const App = () => {
  const course = 'Half Stack application development'
  /* exercises 1.1 and 1.2 */
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  /* exercise 1.3 */
  /* const part1 = {
    name: 'Fundamentals of React', exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data', exercises: 7
  }
  const part3 = {
    name: 'State of a component', exercises: 14
  } */

  return (
    <div>
      <Header course = {course}/>
      {/* exercise 1.1 */}
      {/* <Content part = {part1} exercises = {exercises1} />*/}
      {/* <Content part = {part2} exercises = {exercises2} />*/}
      {/* <Content part = {part3} exercises = {exercises3} />*/}
      {/* exercise 1.2 */}
      <Content part1 = {part1} exercise1 = {exercises1} part2 = {part2} exercise2 = {exercises2} part3 = {part3} exercise3 = {exercises3}/>
      <Total total = {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))