
const Chat=function () {
  return(
  <div className="chat">
    <h2>Chat Messages</h2>
    <div className="chat1">
    <div className="container darker">
    <span className="you">you</span>
      <p>Hello. How are you today?</p>
      <span className="time-left">11:01</span>
    </div>

    <div className="container lighter">
    <span className="bot">bot</span>
      <p>Hey! I'm fine. Thanks for asking!</p>
      <span className="time-right">11:00</span>
    </div>

    <div className="container darker">
    <span className="you">you</span>
      <p>Sweet! So, what do you wanna do today?</p>
      <span className="time-left">11:05</span>
    </div>

    <div className="container lighter">
    <span className="bot">bot</span>
      <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
      <span className="time-right">11:02</span>
    </div>

    <div className="container darker">
    <span className="you">you</span>
      <p>Hello. How are you today?</p>
      <span className="time-left">11:01</span>
    </div>

    <div className="container lighter">
    <span className="bot">bot</span>
      <p>Hey! I'm fine. Thanks for asking!</p>
      <span className="time-right">11:00</span>
    </div>

    <div className="container darker">
    <span className="you">you</span>
      <p>Sweet! So, what do you wanna do today?</p>
      <span className="time-left">11:05</span>
    </div>

    <div className="container lighter">
    <span className="bot">bot</span>
      <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
      <span className="time-right">11:02</span>
    </div>
    </div>

    <div className="Sendmsg">
        <input type="text" placeholder="enter text here" id="in1" />
        <button >send</button>
    </div>
  </div>
)}
export default Chat;