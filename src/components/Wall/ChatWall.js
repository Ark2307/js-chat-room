import React from 'react';
import NewMessage from "../Messages/NewMessage" ;
import NewOtherMessage from "../Messages/NewOtherMessage" ;
import MessageForm from "../Form/MessageForm" ;
import "./ChatWall.css" ;

function ChatWall(props) {
    const { chats , activeChat , userName , messages } = props ;
    const chatRoom = chats && chats[activeChat] ;

    function renderMessages() {
        const ids = Object.keys(messages) ;
        
        return ids.map((key , index) => {
            const message = messages[key] ;
            const lastMessageId = index === 0 ? null : ids[index - 1] ;
            const isMyMessage = userName === message.sender.userName ;

            return(
                <div key = {`msg_${index}`} style = {{width: '100%'}}>
                    <div className='message-space'>
                        {
                            isMyMessage ? 
                            <NewMessage message = {message} /> : 
                            <NewOtherMessage message = {message} lastMessage = {messages[lastMessageId]} />
                        }
                    </div>

                    <div className='read-receipts' 
                        style={{
                            marginRight: isMyMessage ? '18px' : '0px' ,
                            marginLeft: isMyMessage ? '0px' : '65px'    
                        }} >
                            read-receipts
                    </div>
                </div>
            )
        }) ;
    }
    if(!chatRoom)
        return "Try to check your connection..." ;

    return (
        <div className= 'chat-wall'>
            <div className= 'chatroom-title-container'>
                <div className= 'chatroom-title'> {chatRoom.title} </div>
                <div className= 'chatroom-subtitle'>
                    {chatRoom.people.map((person) => ` ${
                        person.person.username
                    }`)}
                </div>
            </div>

            {renderMessages()}

            <div style={{ height: '100px'}} />

            <div className= 'form-container'>
                <MessageForm {... props} chatId = {activeChat} />
            </div>

        </div>
  );
}

export default ChatWall;
