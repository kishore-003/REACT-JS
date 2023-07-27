import { useState } from "react";

function Counter() {
    const[count,setCount] = useState(0);
    
    const handleadd=()=>{
        setCount(count+1);
        console.log(count);
    }
    const handlesub=()=>{
        setCount(count-1);
        console.log(count);
    }
  return (
    <div>
        <h2>Counter</h2>
        <h3>{count}</h3>
        <button onClick={handlesub}  style={{padding:8,margin:4,color:"white",backgroundColor:"#045590"}}>-</button>
        <button onClick={handleadd}  style={{padding:8,margin:4,color:"white",backgroundColor:"#045590"}}>+</button>

    </div>
  )
}

export default Counter