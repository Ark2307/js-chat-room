import React from "react";
import MyMessage from "../Messages/MyMessage";
import TheirMessage from "../Messages/TheirMessage";
import MessageForm from "../Form/MessageForm";
import "./ChatWall.css";

function ChatWall(props) {
  const { chats, activeChat, userName, messages } = props;
  const chatRoom = chats && chats[activeChat];

  const receiveReceipts = (message, isMyMessage) => {
    return chatRoom.people.map(
      (person, index) =>
        person.last_read === message.id && (
          <div
            key={`read_${index}`}
            className="readReceipt"
            style={{
              float: isMyMessage ? "right" : "left",
              backgroundImage:
                person.person.avatar && `url(${person?.person?.avatar})`,
            }}
          />
        )
    );
  };

  function renderMessages() {
    const ids = Object.keys(messages);

    return ids.map((key, index) => {
      const message = messages[key];
      const lastMessageId = index === 0 ? null : ids[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="messageSpace">
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastMessage={messages[lastMessageId]}
              />
            )}
          </div>

          <div
            className="readReceipts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "65px",
            }}
          >
            {receiveReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  }
  if (!chatRoom) return "Try to check your connection...";

  return (
    <div className="chatWall">
      <div className="chatroomTitleContainer">
        <div className="chatroomTitle"> {chatRoom.title} </div>
        <div className="chatroomSubtitle">
          {chatRoom.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>

      {renderMessages()}

      <div style={{ height: "100px" }} />

      <div className="formContainer">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
}

export default ChatWall;
