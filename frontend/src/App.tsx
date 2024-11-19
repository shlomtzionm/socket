import { ChangeEvent, useState } from "react";
import "./App.css";
import { socketService } from "./socketService";
function App() {

  const [messages,setMessages] = useState<string[]>([])
  const [nickname,setNickname] = useState<string>("")
  const [msg,setMsg] = useState<string>("")

function handleNickname(event:ChangeEvent<HTMLInputElement>){
  setNickname(event.target.value)
}

function handleMsg(event:ChangeEvent<HTMLInputElement>){
  setMsg(event.target.value)
}

  function connect(){
    socketService.connect((msg:string)=>{
setMessages(prev => [...prev, msg])
    })
    socketService.send(nickname+" has been connected.")
  }

  
  function disconnect(){
    socketService.send(nickname+" has been disconnected.")
    socketService.disconnect()
    
  }

  function send(){
   
    socketService.send(`${nickname}: ${msg}`)
  }
  return (
    <div className="App">
<h1>Socket.io Chat</h1>
<label>Nick Name:</label>
<input type="text" onChange={handleNickname} value={nickname}/>
      <button onClick={connect}>Connect</button>
      <button onClick={disconnect}>Disconnect</button>
      <hr></hr>
      <label>Message:</label>
      <input type="text" onChange={handleMsg} value={msg}/>
      <button onClick={send}>Send</button>
      <ul>
        {messages.map((msg, index)=> <li key={index}>{msg} </li>)}
      </ul>
    </div>
  );
}

export default App;
