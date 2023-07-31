import { useState} from "react";
import axios from "axios";
import useInput from "../hooks/useInput";
const Chat=function () {
  document.title='chat'
  const [ques,setques]=useInput('');
  const [error,setError]=useState('');
  const [curhrs,setHrs]=useState(new Date().getHours())
  const [curmin,setMints]=useState(new Date().getMinutes())
  const handleClick=async()=>{
    setHrs(new Date().getHours());
    setMints(new Date().getMinutes());
    let divforchat=document.getElementsByClassName('chat1')[0]
      const newDiv = document.createElement('div');
      newDiv.className='container darker'
      newDiv.innerHTML = `
      <span class="you">you</span>
        <p>${ques}</p>
        <span class="time-left">${curhrs}:${curmin}</span>`;
        divforchat.appendChild(newDiv);
    const config = {
      header:{
          "Content-Type":"text/plain"
      }
      }
      
      try{
        await axios.post("http://localhost:5000/api/chat",{'mytxt':ques},config)
         .then((data)=>{
          setHrs(new Date().getHours());
          setMints(new Date().getMinutes());
          const newDiv = document.createElement('div');
          newDiv.className='container lighter';
          newDiv.innerHTML = `
          <span class="bot">bot</span>
            <p>${data.data.replaceAll(/@User!/g,'')}</p>
            <span class="time-right">${curhrs}:${curmin}</span>`;
          divforchat.appendChild(newDiv);
        })
          .catch((err)=>{
            console.log(err);
          })
      }catch(err){
        setError(err.response);
        console.log(error);
      }
  }
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  }
  return(
  <div className="chat">
    <h2>Chat Messages</h2>
    <div className="chat1">
    </div>

    <div className="Sendmsg">
        <input type="text" placeholder="enter text here" onKeyPress={handleKeyPress} id="in1" value={ques} onChange={setques}/>
        <button onClick={handleClick}>send</button>
    </div>
  </div>
)};
export default Chat;