import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>sum {good + neutral + bad}</p>
        <p>average {(((good * 1) + (neutral * 0) + (bad * -1)) / (good + neutral + bad))}</p>
        <p>positive {((good / (good + neutral + bad)) * 100) + '%'}</p>
      </div>
    </div>
  )
}


ReactDOM.render(<App />, 
  document.getElementById('root')
)