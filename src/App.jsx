
import './App.css'
import {useState} from 'react';
import { useEffect } from 'react';
function App() {
  const [time,setTime]=useState(0);
  const [running,setRunning]=useState(false);

  useEffect(()=>{
    let interval;
    if(running){
      interval=setInterval(()=>{
        setTime((prevtime)=>prevtime+10);
      },10);
    }else if(!running){
      clearInterval(interval);
    }
    return ()=>clearInterval(interval);
  },[running]);
  return (
    <>
    <div className="flex flex-col items-center justify-center py-8">
    <h1 className='text-2xl font-semibold'>01-Stopwatch</h1>
    <div className="text-xl font-semibold py-4">
      <span>{("0"+ Math.floor((time/60000)%60)).slice(-2)}:</span>
      <span>{("0"+ Math.floor((time/1000)%60)).slice(-2)}:</span>
      <span>{("0"+ Math.floor((time/10)%100)).slice(-2)}:</span>
    </div>
    <div className="w-1/3 max-w-sm flex flex-row justify-evenly ">
      {running?(  <button onClick={()=>{setRunning(false)}}>Stop</button>)
      :(<button onClick={()=>{setRunning(true)}}>Start</button>)}
      
    
      <button onClick={()=>{setTime(0)}}>Reset</button>
    </div>
    </div>
    </>
  )
}

export default App
