import React, { useState } from 'react'
import ReactDOM from 'react-dom'

/* exercises 1.8 and 1.10 */
const Statistic = (props) => {
  console.log(props)
  return (
    <p>{props.text} {props.counter}</p>
  )
}

/* exercise 1.9 */
const Statistics = ({good, neutral, bad}) => {
  if ((good === 0) && (neutral === 0) && (bad === 0)) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <Statistic text = "good" counter = {good}/>
      <Statistic text = "neutral" counter = {neutral}/>
      <Statistic text = "bad" counter = {bad}/>
      <Statistic text = "average" counter = {(good + (neutral * 0) + (bad * -1))/(good + neutral + bad)}/>
      <Statistic text = "positive" counter = {`${(good / (good + neutral + bad)) * 100}%`}/>
    </div>
  )
}

/* exercise 1.10 */
/* const Button = (props) => {
  <button onClick = {props.onClick}>
    {props.counter }
} */

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const totalScore = good + (neutral * 0) + (bad * -1)
  const average = totalScore / total
  const positive = (good / total) * 100

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <button onClick={() => setGood(good + 1)}>
          good
        </button>
        <button onClick={() => setNeutral(neutral + 1)}>
          neutral
        </button>
        <button onClick={() => setBad(bad + 1)}>
          bad
        </button>
      </div>
      <h1>Statistics</h1>
      <div>
        { /* exercise 1.7 */
        /* <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>sum {total}</p>
        <p>average {average}</p>
        <p>positive {positive + '%'}</p> */}
        {/* exercise 1.8 */}
        {/* <Statistic text = 'good' counter = {good}/>
        <Statistic text = 'neutral' counter = {neutral}/>
        <Statistic text = 'bad' counter = {bad}/>
        <Statistic text = 'sum' counter = {total}/>
        <Statistic text = 'average' counter = {average}/>
        <Statistic text = 'positive' counter = {`${positive}%`}/> */}
        {/* exercise 1.9 */}
        <Statistics good = {good} neutral = {neutral} bad = {bad} average = {average} positive = {positive}/>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)