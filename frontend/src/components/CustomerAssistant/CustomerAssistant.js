import React, { useState } from "react";
import ChatBot from "../ChatBot/ChatBot";
import "./CustomerAssistant.css";
const CustomerAssistant = () => {
  const [isChatOpen, setChatOpen] = useState(false); 
  const handleAssistantClick = () => {
    setChatOpen((prev) => !prev); 
  };

  return (
    <div>
      <div
        className="customer-assistant"
        title="Chat with our AI Assistant"
        onClick={handleAssistantClick}
      >
        <button className="assistant-button">
          <img
            src="/icons/ai.svg"
            alt="AI Assistant Icon"
            className="assistant-icon"
          />
        </button>
      </div>

  
      {isChatOpen && <ChatBot />}
    </div>
  );
};

export default CustomerAssistant;
