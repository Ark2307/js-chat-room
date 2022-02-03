import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatWall from "./components/Wall/ChatWall";

import Login from "./components/Login/Login";

function App() {
  if (!localStorage.getItem("username")) {
    return <Login />;
  }
  return (
    <ChatEngine
      height="100vh"
      projectID="8812f731-0926-4f0e-943a-cf0b4abb2a92"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatWall {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
}

export default App;
