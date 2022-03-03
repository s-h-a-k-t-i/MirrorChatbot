import "./Header.css";
import chatbotImage from "../Images/chatbot-image.png";

const Header = () => {
  return (
    <div className="header">
      <img src={chatbotImage} alt="ChatbotImage" />
      <h1>Mirror Chatbot</h1>
    </div>
  );
};

export default Header;
