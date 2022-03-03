import "./Message.css";

const Message = (props) => {
  setTimeout(() => {}, 1000);
  return (
    <div className={`messageBox ${props.message.classs}`}>
      {props.message.classs === "left" ? "bot:" : "you:"} {props.message.text}
    </div>
  );
};

export default Message;
