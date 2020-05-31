import React, { useState } from 'react'
import ReactDOM from 'react-dom'

/* exercises 1.8 and 1.10b */
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
      <Statistic text = "sum" counter = {good + neutral + bad}/>
      <Statistic text = "average" counter = {(good + (neutral * 0) + (bad * -1))/(good + neutral + bad)}/>
      <Statistic text = "positive" counter = {`${(good / (good + neutral + bad)) * 100}%`}/>
    </div>
  )
}

/* exercise 1.10a */
const Button = (props) => (
  <button onClick = {props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const totalScore = good + (neutral * 0) + (bad * -1)
  const average = totalScore / total
  const positive = (good / total) * 100
  /* exercise 1.10a */
  const incrementGood = good => {
    setGood(good + 1)
  }
  const incrementNeutral = neutral => {
    setNeutral(neutral + 1)
  }
  const incrementBad = bad => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        {/* exercises 1.6 to 1.9 */}
        {/* <button onClick={() => setGood(good + 1)}>
          good
        </button>
        <button onClick={() => setNeutral(neutral + 1)}>
          neutral
        </button>
        <button onClick={() => setBad(bad + 1)}>
          bad
        </button> */}
        {/* exercise 1.10 */}
        <Button handleClick={() => incrementGood(good)} text = "good"/>
        <Button handleClick={() => incrementNeutral(neutral)} text = "neutral"/>
        <Button handleClick={() => incrementBad(bad)} text = "bad"/>
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
        {/* exercises 1.9 and 1.10b */}
        {/* <Statistics good = {good} neutral = {neutral} bad = {bad} sum = {total} average = {average} positive = {positive}/> */}
        {/* exercise 1.11 */}
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td><Statistics good = {good}/></td>
            </tr>
            <tr>
              <td><Statistics neutral = {neutral}/></td>
            </tr>
            <tr>
              <td><Statistics bad = {bad}/></td>
            </tr>
            <tr>
              <td><Statistics sum = {total}/></td>
            </tr>
            <tr>
              <td><Statistics average = {average}/></td>
            </tr>
            <tr>
              <td><Statistics positive = {positive}/></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)