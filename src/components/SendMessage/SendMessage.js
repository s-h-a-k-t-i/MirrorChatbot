import { useState } from "react";
import "./SendMessage.css";

const SendMessage = (props) => {
  const [inputText, setInputText] = useState("");

  const send = (event) => {
    // if (props.loading) {
    //   alert("Loading... Please wait");
    // } else
    if (inputText === "") {
      alert("Empty message");
    } else {
      props.sendMsg(inputText);
      setInputText("");
    }
  };

  return (
    <div className="inputBox">
      <input
        className="chatInput"
        name="Input box"
        onKeyPress={(event) => (event.key === "Enter" ? send() : null)}
        onChange={(event) => setInputText(event.target.value)}
        value={inputText}
        placeholder="Type a message"
        autoComplete="off"
      />
      <button onClick={send} className="sendBtn">
        Send
      </button>
      <button onClick={props.clearChat} className="sendBtn">
        Clear Chat
      </button>
      <button onClick={props.testApp} className="sendBtn">
        Test this app
      </button>
    </div>
  );
};

export default SendMessage;
