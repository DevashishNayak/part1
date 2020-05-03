import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistic = ({text, value, per}) => {

  return (
    <tr>
      <td>
        {text}
      </td>
      <td>
        {value} {per}
      </td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {

  let total = good + neutral + bad
  if(total===0){

    return (
      <div>
        <p>
          No feedback given
        </p>
      </div>
    )
  }
  else{

    return (
      <div>
        <table>
          <tbody>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="all" value={total} />
            <Statistic text="average" value={(good-bad)/total} />
            <Statistic text="positive" value={good/total*100} per="%" />
          </tbody>
        </table>
      </div>
    )
  }
}

const Button = ({handleClick, text}) => {

  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good+1)
  const handleNeutral = () => setNeutral(neutral+1)
  const handleBad = () => setBad(bad+1)

  return (
    <div>
      <h1>
        give feedback
      </h1>
      <Button handleClick={() => handleGood()} text="good" />
      <Button handleClick={() => handleNeutral()} text="neutral" />
      <Button handleClick={() => handleBad()} text="bad" />
      <h1>
        statistics
      </h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);