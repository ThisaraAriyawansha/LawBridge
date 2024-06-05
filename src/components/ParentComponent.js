// ParentComponent.js
import React, { useState } from 'react';
import SendMessage from './SendMessage';
import ReceiveMessage from './ReceiveMessage';

const ParentComponent = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div>
      <SendMessage onMessageChange={handleMessageChange} />
      <ReceiveMessage message={message} />
    </div>
  );
};

export default ParentComponent;
