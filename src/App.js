import Header from "./components/Header";
import MessageList from "./components/MessageList";
import SendMessage from "./components/SendMessage";
import "./App.css";

const App = () => {
  const sendMsg = () => {
    console.log("msg");
  };

  return (
    <div className="chatPage">
      <Header />
      <MessageList />
      <SendMessage sendMsg={sendMsg} />
    </div>
  );
};

export default App;
