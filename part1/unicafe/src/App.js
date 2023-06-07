import { useState } from "react";

const H1 = ({ text }) => (
  <h1>{text}</h1>
)

const H2 = ({ text }) => (
  <h2>{text}</h2>
)

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = (props) => <tr><td>{props.text}</td><td>{props.value}</td></tr>

const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={good + bad + neutral} />
          <StatisticLine text='average' value={(good - bad) / (good + bad + neutral)} />
          <StatisticLine text='positive' value={good / (good + bad + neutral) * 100 + '%'} />
        </tbody>
      </table>
    </div>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <H1 text='give feedback' />
      <Button text='good' onClick={() => setGood(good + 1)} />
      <Button text='neutral' onClick={() => setNeutral(neutral + 1)} />
      <Button text='bad' onClick={() => setBad(bad + 1)} />
      <H2 text='statistics' />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;
