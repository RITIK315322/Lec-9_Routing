import React , { useEffect, useState }from 'react'
import './page.css'

export default function Contact() {
  const[count0, setCount0] = useState(7);
  const[count1, setCount1] = useState(17);
  const[count2, setCount2] = useState(73);


  console.log("Contact Rerendered...");

  useEffect(()=>{
    console.log("Home component ka useEffect chal gya...");
   
    return() => {
      console.log("Home Unmounted");
      
      
      };
  },[])
  return (
    <div id='page'>
            {count0}
      <br /><br />
      <button onClick={() => setCount0(count0 + 5)}> Contact Click</button>
      <br /><br />

      {count1}
      <br /><br />
      <button onClick={() => setCount1(count1 + 5)}> Contact Click</button>

      <br /><br />
      {count2}
      <br /><br />
      <button onClick={() => setCount2(count2 + 5)}> Contact Click</button>
    </div>
  )
}
