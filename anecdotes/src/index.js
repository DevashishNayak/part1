import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const length = props.anecdotes.length

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(length).fill(0))

  const copy = [...points]
  const max = Math.max(...copy)
  const maxIndex = copy.indexOf(max)

  const handleVote = () => {
    copy[selected] += 1
    setPoints(copy)
  }
  const handleClick = () => setSelected(Math.floor(Math.random()*length))

  return (
    <div>
      <h1>
        Anecdote of the day
      </h1>
      {props.anecdotes[selected]}
      <p>
        has {copy[selected]} votes
      </p>
      <button onClick={() => handleVote()}>
        vote
      </button>
      <button onClick={() => handleClick()}>
        next anecdote
      </button>
      <h1>
        Anecdote with most votes
      </h1>
      {props.anecdotes[maxIndex]}
      <p>
        has {copy[maxIndex]} votes
      </p>
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
);