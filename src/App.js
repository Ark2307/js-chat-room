import React from 'react';
import { ChatEngine } from "react-chat-engine" ;
import "./App.css" ;
import ChatWall from "./components/Wall/ChatWall";

function App() {
    return(
        <ChatEngine 
            height = "100vh"
            projectID = "8812f731-0926-4f0e-943a-cf0b4abb2a92"
            userName = "admin" 
            userSecret = "admin"
            renderChatFeed = {(chatAppProps) => <ChatWall {...chatAppProps} />}
        />
    )
}

export default App ;