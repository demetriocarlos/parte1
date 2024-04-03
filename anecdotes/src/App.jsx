 import { useState } from "react"

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  // Estado para almacenar los votos de cada anécdota
  const [voto, setVoto] = useState( new Array(anecdotes.length).fill(0))
   

 const handleRandom = () => {
      setSelected(Math.floor(Math.random() * anecdotes.length))
  }


  const handleVoto = () => {
    const newVotes = [...voto]
    newVotes[selected] += 1
    setVoto(newVotes)

  }
// Obtener el índice de la anécdota con más votos
  const maxVotesIndex = voto.indexOf(Math.max(...voto))


  return (
    <>
       <div>
        <h1>Anecdote of the day</h1>
       {anecdotes[selected]}
       <p>has{voto[selected]} votes</p>

       <div>
       <button onClick={handleRandom}>next anecdote</button>
        
        <button onClick={handleVoto}>vote</button>
       </div>
         <div>
          <h1>Anecdote with most votes</h1>
            <p>{anecdotes[maxVotesIndex]}</p>
            <p>has  {voto[maxVotesIndex]} votes</p>

         </div>
          
       </div>
    </>
  )
}

export default App





//git remote add origin https://github.com/demetriocarlos/fullstack-part1.git