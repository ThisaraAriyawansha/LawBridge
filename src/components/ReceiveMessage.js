import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReceiveMessage = () => {
  const [receivedMessage, setReceivedMessage] = useState('');
  const [key, setKey] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const generateKey = async () => {
      try {
        const cryptoKey = await window.crypto.subtle.generateKey(
          {
            name: 'AES-GCM',
            length: 256,
          },
          true,
          ['encrypt', 'decrypt']
        );
        console.log('Decryption Key Generated:', cryptoKey);
        setKey(cryptoKey);
      } catch (error) {
        console.error('Error generating key:', error);
      }
    };

    generateKey();
  }, []);

  useEffect(() => {
    const fetchMessage = async () => {
      if (!key) {
        console.error('Decryption key not ready');
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/receive-message');
        console.log('Received encrypted message:', response.data);

        const encryptedMessage = response.data.encryptedMessage.split(',').map(Number);
        const iv = new Uint8Array(12); // Replace with the actual IV used during encryption

        const decryptedData = await window.crypto.subtle.decrypt(
          {
            name: 'AES-GCM',
            iv: iv,
          },
          key,
          Uint8Array.from(encryptedMessage)
        );

        const decryptedMessage = new TextDecoder().decode(decryptedData);
        console.log('Decrypted message:', decryptedMessage);
        setReceivedMessage(decryptedMessage);
      } catch (error) {
        console.error('Error fetching message:', error);
        setError('Error fetching message. Please try again later.');
      }
    };

    fetchMessage();
  }, [key]);

  return (
    <div>
      {error && <p>{error}</p>}
      {receivedMessage ? (
        <div>
          <h3>Received Message</h3>
          <p>{receivedMessage}</p>
        </div>
      ) : (
        <p>No message received</p>
      )}
    </div>
  );
};

export default ReceiveMessage;
