 import { useState } from "react"
 import { Statistics } from "./Statistics"
import { Button } from "./Button"

// eslint-disable-next-line react/prop-types


function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const andleGood = () => {
    setGood(good + 1)
  }

  const andlNeutral = () => {
    setNeutral( neutral + 1)
  }
  const andleBad = () => {
    setBad(bad - 1)
  }

  const total = good + neutral + bad

  const promedio =  (good - bad) / total

  const porcentaje = (100 * good) / total +"%"

  return (
    <>
       <div>
          <h1>give feedback</h1>

          <Button onClick={andleGood}  text="good"/> 
          <Button onClick={andlNeutral} text="neutral"/> 
          <Button onClick={andleBad} text="bad"/> 
       </div>

       
       <h1>static</h1>
        {good || neutral || bad ? 
        <> 
       <Statistics text= "good" value={good}/>
       <Statistics text= "neutral" value={neutral}/>
       <Statistics text= "bad" value={bad}/>
       <Statistics text= "all" value={total}/>
       <Statistics text= "average" value={promedio}/>
       <Statistics text= "positive" value={porcentaje}/>
       </> : "No feedback given"
        }
    </>
  )
}

export default App
