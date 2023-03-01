import React, { useState, useEffect } from "react";

export default function App() {

  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hour, setHour] = useState(0)

  useEffect(() => {
    let timer = setInterval(() => {
      setSeconds(seconds + 1)

      if (seconds === 59) {
        setMinutes(minutes + 1)
        setSeconds(0)
      }
      if (minutes === 60) {
        setHour(hour + 1)
        setMinutes(0)
      }
    }, 1000)
     return () => clearInterval(timer)
  })

  const start=()=>{
  
    setSeconds(0)
  }
  
  const restart=()=>{
    setHour(0)
    setMinutes(0)
    setSeconds(0)
  }

  const stop=()=>{
    clearInterval(timer)
  }

  return (
    <>
      <div className="timer">
        <div className="container">
          <div className="timer_container">
            <h1>Stopwatch</h1>
            <h1>{hour<10 ? '0'+hour:hour} hr : {minutes<10? '0'+minutes:minutes} min : {seconds<10? '0'+seconds:seconds} sec </h1>

            <button className="restart" onClick={restart}> Restart </button>
            <button className="stop" onClick={stop}> Stop </button>
          </div>
        </div>
      </div>
    </>
  )
}