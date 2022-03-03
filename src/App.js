import Header from "./components/Header/Header";
import Message from "./components/Message/Message";
import SendMessage from "./components/SendMessage/SendMessage";
import ScrollToBottom from "react-scroll-to-bottom";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [messages, setMessages] = useState(() => {
    const stickyValue = window.localStorage.getItem("mirrorChatbotData");
    return stickyValue !== null ? JSON.parse(stickyValue) : [];
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.localStorage.setItem("mirrorChatbotData", JSON.stringify(messages));
  }, [messages]);

  const sendMsg = (inputText) => {
    setMessages((prevMsg) => {
      const newMsg = { text: inputText, classs: "right" };
      return [...prevMsg, newMsg];
    });

    setLoading(true);
    setTimeout(() => {
      setMessages((prevMsg) => {
        const newMsg = { text: inputText, classs: "left" };
        return [...prevMsg, newMsg];
      });
      setLoading(false);
    }, 400);
  };

  const clearChat = () => {
    window.localStorage.removeItem("mirrorChatbotData");
    setMessages([]);
  };

  return (
    <div className="chatPage">
      <Header />
      <ScrollToBottom className="chatBox">
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </ScrollToBottom>
      <SendMessage sendMsg={sendMsg} clearChat={clearChat} loading={loading} />
    </div>
  );
};

export default App;
