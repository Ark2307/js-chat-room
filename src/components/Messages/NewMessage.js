import React from 'react';
import "./Message.css" ;
function NewMessage({ message }) {

    if(message?.attachments?.length > 0){
        // message is an image
        return (
            <img className='message-image' 
            src={message.attachments[0].file}
            alt='attached message'
            style={{ float : 'right'}}
            />
        )
    }

    return (
        <div className='newMessage' style={{float : 'right' , marginRight: '18px' , color: 'white' , backgroundColor: 'rgb(28, 70, 196)'}}>
            {message.text}
        </div>
    );
}

export default NewMessage;
