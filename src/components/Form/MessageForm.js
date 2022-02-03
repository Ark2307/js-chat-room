import React, { useState } from "react";
import "./MessageForm.css";

import { BiImageAdd } from "react-icons/bi";
import { FiSend } from "react-icons/fi";

import { sendMessage, isTyping } from "react-chat-engine";

function MessageForm(props) {
  const [value, setValue] = useState("");
  const { chatId, creds } = props;

  const handleChange = (e) => {
    //console.log(e.target.value);
    setValue(e.target.value);

    isTyping(props, chatId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = value.trim();
    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }
    setValue("");
  };

  const handleMessage = (e) => {
    sendMessage(creds, chatId, { files: e.target.files, text: "" });
  };

  return (
    <form className="messageForm" onSubmit={handleSubmit}>
      <input
        className="messageInput"
        placeholder="New Message ...."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <label htmlFor="uploadButton">
        <span className="imageButton">
          <BiImageAdd className="imageIcon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="uploadButton"
        style={{ display: "none" }}
        onChange={handleMessage.bind(this)}
      />

      <button type="submit" className="sendButton">
        <FiSend className="sendIcon" />
      </button>
    </form>
  );
}

export default MessageForm;
