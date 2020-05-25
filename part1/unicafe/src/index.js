import React, { useState } from 'react'
import ReactDOM from 'react-dom'

/* exercise 1.8 */
const Statistics = (props) => {
  console.log(props)
  return (
    <p>{props.text} {props.counter}</p>
  )
}

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
      {/* exercise 1.7 */}
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
        <Statistics text = 'good' counter = {good}/>
        <Statistics text = 'neutral' counter = {neutral}/>
        <Statistics text = 'bad' counter = {bad}/>
        <Statistics text = 'sum' counter = {total}/>
        <Statistics text = 'average' counter = {average}/>
        <Statistics text = 'positive' counter = {`${positive}%`}/>
      </div>
    </div>
  )
}


ReactDOM.render(<App />, 
  document.getElementById('root')
)