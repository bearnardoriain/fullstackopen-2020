import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
  <button onClick = {handleClick}>
    {text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  /* exercise 1.13 */
  const [votes, setVotes] = useState(anecdotes.map(() => 0))
  /* exercise 1.14 */
  const mostVotes = votes.indexOf(Math.max.apply(null, votes))

  /* exercise 1.12 */
  const displayRandomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  /* exercise 1.13 */
  const voteForAnecdote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      "{props.anecdotes[selected]}" has {votes[selected]} {(votes[selected] === 1) ? 'vote' : 'votes'}
      <br/>
      {/* exercise 1.12 */}
      <Button handleClick = {displayRandomAnecdote} text = 'next anecdote'/>
      {/* exercise 1.13 */}
      <Button handleClick = {voteForAnecdote} text = 'vote'/>
      {/* exercise 1.14 */}
      <br/>
      <h1>Anecdote with most votes</h1>
      "{props.anecdotes[mostVotes]}" has {votes[mostVotes]} {(votes[mostVotes] === 1) ? 'vote' : 'votes'}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)