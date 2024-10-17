import { useState } from "react"

export default function Counter(){
    const [count,setCount] =useState(0);
    // console.log(count)
    const handleClick =()=>{
        const newCount =count +1;
        setCount(newCount);
    }
   const handleReduce =()=>{
    const newCount = count -1;
    setCount(newCount);
   }
    return (<div>
        <div style={{border: '2px solid tomato'}}>
        <h3>Counter {count}</h3>
        <button onClick={handleClick}>Add</button>
        <button onClick={handleReduce}>Decrement</button>
        </div>
    </div>)
}