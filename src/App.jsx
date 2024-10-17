
import reactLogo from './assets/react.svg'

import './App.css'
import Counter from './Counter'
import Users from './Users'
function App() {
  
  function handlerAlart(){
    alert('hello world')
  }
  const sendPerameter= (num)=>{
    alert(num+200);
  }
  return (
    
    <>
    <Users></Users>
    <Counter></Counter>
     <button onClick={handlerAlart}>click me</button>
     <button onClick={()=>{alert('onclick set on button')}}>click 3</button>
     {/* when we send parameter data on a function  */}
     <button onClick={()=>{sendPerameter(10)}}>click send parameter</button>
     <dir>
      <h4>React Core Concept</h4>
      <ol>
        <li>Component</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>state</li>
        <li>load Data useD useEffect</li>
      </ol>
     </dir>
    </>
  )
}

export default App
