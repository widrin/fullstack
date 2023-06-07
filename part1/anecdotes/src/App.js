import { useState } from "react";

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(new Map())
  const [idx, setIdx] = useState(0)

  function randAnecdotes() {
    return Math.floor(Math.random() * anecdotes.length)
  }

  function selectAnecdotes() {
    setIdx(randAnecdotes())
  }

  function vote() {
    if (selected.has(idx)) {
      let v = selected.get(idx) + 1
      selected.set(idx, v)
    } else {
      selected.set(idx, 1)
    }

    setSelected(new Map(selected))
  }

  function voteCount() {
    if (selected.has(idx)) {
      return selected.get(idx)
    }
    return 0
  }

  function mostVoteIdx() {
    let most = 0
    let idx = 0
    selected.forEach((v, k) => {
      console.log(k, v)
      if (v > most) {
        idx = k
      }
    })
    return idx
  }

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[idx]}</p>
        <p>has {voteCount()} votes</p>
      </div>
      <div>
        <Button text='vote' onClick={vote} />
        <Button text='next anecdotes' onClick={selectAnecdotes} />
      </div>
      <div>
        <h1>Anecdote with most vote</h1>
        <p>{anecdotes[mostVoteIdx()]}</p>
      </div>
    </div>
  );
}

export default App;
