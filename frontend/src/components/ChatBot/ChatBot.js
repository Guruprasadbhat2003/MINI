import React, { useState } from "react";
import { fetchGeminiResponse } from "./gemini"; // Assuming the function is already set for Gemini
import "./ChatBot.css";

const ChatBot = () => {
  const [userMessage, setUserMessage] = useState(""); // State for user input
  const [chatHistory, setChatHistory] = useState([]); // State to maintain chat history

  // Function to handle sending messages
  const handleSendMessage = async (e) => {
    e.preventDefault(); // Prevent page reload
    setChatHistory((prev) => [
      ...prev,
      { role: "user", content: userMessage }, // Add user message to history
    ]);

    try {
      // Fetching Gemini response
      const botResponse = await fetchGeminiResponse(userMessage);
      setChatHistory((prev) => [
        ...prev,
        { role: "assistant", content: botResponse }, // Add assistant's response to history
      ]);
    } catch (error) {
      console.error(
        "Error fetching response from assistant:",
        error.response ? error.response.data : error.message
      );
      console.error(
        "Error status:",
        error.response ? error.response.status : "No response"
      );
      // Adding error message to chat history if the request fails
      setChatHistory((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I couldn't get a response. " +
            (error.response ? error.response.data : error.message),
        },
      ]);
    }

    setUserMessage(""); // Clear input after sending
  };

  return (
    <div className="chatbot-container">
      <div className="chat-history">
        {chatHistory.map((msg, index) => (
          <div key={index} className={msg.role}>
            <strong>{msg.role === "user" ? "You" : "Assistant"}:</strong>{" "}
            {msg.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)} // Update input value
          placeholder="Ask me anything..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBot;
