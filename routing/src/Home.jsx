import React, { useEffect, useState } from 'react'

import './page.css'

export default function Home() {

const[count0, setCount0] = useState(11);
const[count1, setCount1] = useState(41);
const[count2, setCount2] = useState(51);

console.log("Home Rerendered...");

useEffect(()=>{
  console.log("useEffect is Mounted...");
  
return() => {
console.log("Home Unmounted");


};

},[])

    return (
    <div id='page'>
     {count0}
     <br /><br />
     <button onClick={()=> setCount0(count0+5)}> Home Click</button>

     <br /><br />

     {count1}
     <br /><br />
     <button onClick={()=> setCount1(count1+5)}> Home Click</button>

     <br /><br />

     {count2}
     <br /><br />
     <button onClick={()=> setCount2(count2+5)}> Home Click</button>
    </div>
  )
}
