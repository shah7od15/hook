import './App.css'
import { useState } from 'react';

function App() {
  let a=Math.floor(Math.random()*90+10);
  let [hook,setHook]=useState(a);
  let [korsat,setkorsat]=useState(true)
  let [text,settext]=useState("w")
  function plus(){
    setHook(++hook)
    
  }
  function minus(){
    setHook(--hook)
    
  }
  function handle(e){
   settext(e.target.value);
   
  }
  return (
    <div className={"container"}>
     <h2>random son:</h2>
     <h1>{hook}</h1>
     <button onClick={plus}>plus</button>
     <button onClick={minus}>minus</button>
      <hr/>
      <h2>hidden  component</h2>
      <button onClick={()=>setkorsat(false)}>hidden</button>
      <button onClick={()=>setkorsat(true)}>show</button>
      <div style={{display:korsat==true?"block":"none"}}>
        <p>Lorem ipsum dolor sit.</p>
        <img src="https://avatars.mds.yandex.net/i?id=af3c28ff5cde7483c3283ab19cd00e09dd4fb943-10871934-images-thumbs&n=13" alt="df" width={400}/>




      </div>
      <hr/>
      <h2>input change</h2>
      <input type="text" placeholder='yozing'  onChange={handle}/>
      <p><b>your text:</b> {text} </p>








    </div>
  )
}

export default App
