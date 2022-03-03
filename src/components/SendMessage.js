import { useState } from "react";
import "./SendMessage.css";

const SendMessage = (props) => {
  const [inputText, setInputText] = useState("");

  const send = (event) => {
    if (inputText === "") {
      alert("Empty message");
    } else {
      props.sendMsg(inputText);
      setInputText("");
      event.preventDefault();
    }
  };

  return (
    <div className="inputBox">
      {/* <form> */}
      <input
        className="chatInput"
        name="Input box"
        onKeyPress={(event) => (event.key === "Enter" ? send() : null)}
        onChange={(event) => setInputText(event.target.value)}
        value={inputText}
        placeholder="Type a message"
      />
      <button onClick={send} className="sendBtn">
        Send
      </button>
      <button className="sendBtn">Test this app</button>
      {/* </form> */}
    </div>
  );
};

export default SendMessage;
