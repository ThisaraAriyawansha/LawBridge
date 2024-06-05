import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SendMessage = () => {
  const [message, setMessage] = useState('');
  const [sentMessage, setSentMessage] = useState('');
  const [key, setKey] = useState(null);

  useEffect(() => {
    const generateKey = async () => {
      const cryptoKey = await window.crypto.subtle.generateKey(
        {
          name: 'AES-GCM',
          length: 256,
        },
        true,
        ['encrypt', 'decrypt']
      );
      setKey(cryptoKey);
    };

    generateKey();
  }, []);

  const sendMessage = async () => {
    if (!key) {
      console.error('Encryption key not ready');
      return;
    }

    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(message);
      const iv = window.crypto.getRandomValues(new Uint8Array(12)); // Initialization vector

      const encryptedData = await window.crypto.subtle.encrypt(
        {
          name: 'AES-GCM',
          iv: iv,
        },
        key,
        data
      );

      const encryptedMessage = Array.from(new Uint8Array(encryptedData)).join(',');

      const response = await axios.post('http://localhost:5000/api/send-message', { encryptedMessage });
      console.log('Message sent:', response.data);
      setSentMessage(response.data.message);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter your message" />
      <button onClick={sendMessage}>Send Message</button>
      {sentMessage && <div>Sent Message: {sentMessage}</div>}
    </div>
  );
};

export default SendMessage;
