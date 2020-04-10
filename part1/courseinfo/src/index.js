import React from 'react'
import ReactDOM from 'react-dom'

/* exercises 1.1 to 1.4 */
/* const Header = (props) => {
  // console.log() from exercise 1.3
  console.log(props)
  return (
    <h1>
      {props.course}
    </h1>
  )
} */
/* exercise 1.5 */
const Header = ({course}) => (
  <h1>
    {course}
  </h1>
)

/* exercises 1.2, 1.3 and 1.4 */
/* const Part = (props) => {
  // console.log() from exercise 1.3
  console.log(props)
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
} */
/* exercises 1.5 */
const Part = ({part, exercises}) => (
  <p>
    {part} {exercises}
  </p>
)

/* exercise 1.1 */
/* const Content = (props) => {
  <p>
    {props.part} {props.exercises}
  </p>
} */
/* exercise 1.2 */
/* const Content = (props) => {
  return (
    <div>
      <Part part = {props.part1} exercises = {props.exercises1}/>
      <Part part = {props.part2} exercises = {props.exercises2}/>
      <Part part = {props.part3} exercises = {props.exercises3}/>
    </div>
  )
} */
/* exercise 1.3 */
/* const Content = (props) => {
  // console.log() from exercise 1.3
  console.log(props)
  return (
    <div>
      <Part name = {props.name} exercises = {props.exercises}/>
    </div>
  )
} */
/* exercise 1.4 */
/* const Content = (props) => {
  // console.log() from exercise 1.3
  console.log(props)
  return (
    <div>
      <Part name = {props.parts[0].name} exercises = {props.parts[0].exercises}/>
      <Part name = {props.parts[1].name} exercises = {props.parts[1].exercises}/>
      <Part name = {props.parts[2].name} exercises = {props.parts[2].exercises}/>
    </div>
  )
} */
/* exercise 1.5 */
const Content = ({parts}) => (
  parts.map(part => (
    <Part key = {part.name} part = {part.name} exercises = {part.exercises}/>
    )
  )
)

/* exercises 1.1, 1.2 and 1.3 */
/* const Total = (props) => {
  // console.log() from exercise 1.3
  console.log(props)
  return (
    <p>
      Number of exercises {props.exercises}
    </p>
  )
} */
/* exercise 1.4 */
/* const Total = ({parts}) => {
  // console.log() from exercise 1.3
  console.log(props)
  return (
    <p>
      Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>
  )
} */
/* exercise 1.5 */
const sum = (p1, p2) => p1 + p2
const Total = ({parts}) => (
  <p>
    Number of exercises {parts.map(part => part.exercises).reduce(sum)}
  </p>
)

const App = () => {
  /* exercises 1.1 to 1.4 */
  /* const course = 'Half-stack application development' */
  /* exercises 1.1 and 1.2 */
  /* const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
   */
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
  /* exercise 1.4 */
  /* const parts = [
    {
      name: 'Fundamentals of React', exercises: 10
    },
    {
      name: 'Using props to pass data', exercises: 7
    },
    {
      name: 'State of a component', exercises: 14
    }
  ] */
  /* exercises 1.5 */
  const course = {
    name: 'Half-stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
      name: 'Using props to pass data',
      exercises: 7
      },
      {
      name: 'State of a component',
      exercises: 14
      }
    ]
  }

  return (
    <div>
      {/* exercises 1.1 to 1.4 */}
      {/* <Header course = {course}/> */}
      {/* exercise 1.5 */}
      <Header course = {course.name}/>
      
      {/* exercise 1.1 */}
      {/* <Content part = {part1} exercises = {exercises1} />*/}
      {/* <Content part = {part2} exercises = {exercises2} />*/}
      {/* <Content part = {part3} exercises = {exercises3} />*/}
      {/* exercise 1.2 */}
      {/* <Content
        part1 = {part1} exercises1 = {exercises1}
        part2 = {part2} exercises2 = {exercises2}
        part3 = {part3} exercises3 = {exercises3}/> */}
      {/* exercise 1.3 */}
      {/* <Content name = {part1.name} exercises = {part1.exercises}/>
      <Content name = {part2.name} exercises = {part2.exercises}/>
      <Content name = {part3.name} exercises = {part3.exercises}/> */}
      {/* exercise 1.4 */}
      {/* <Content parts = {parts}/> */}
      {/* exercise 1.5 */}
      <Content parts = {course.parts}/>

      {/* exercises 1.1 and 1.2 */}
      {/* <Total total = {exercises1 + exercises2 + exercises3}/> */}
      {/* exercise 1.3 */}
      {/* <Total total = {part1.exercises + part2.exercises + part3.exercises}/> */}
      {/* exercise 1.4 */}
      {/* <Total parts = {parts}/> */}
      {/* exercise 1.5 */}
      <Total parts = {course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))