import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [toggler,setToggler]=useState(false);
  const [stre,setStre]=useState(`Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy`);
  return (
    <div id="main">
      {toggler?<p id="para">{stre}</p>:""}
			<button id="click" onClick={()=>setToggler(!toggler)}>display</button>
    </div>
  );
}


export default App;
