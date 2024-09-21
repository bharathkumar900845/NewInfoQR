import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react'; 

const QRCodeGenerator = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter text"
        value={inputText}
        onChange={handleInputChange}
        style={{ marginBottom: '20px', padding: '10px', width: '300px' }}
      />
      {inputText && (
        <div>
          <h2>Your QR Code:</h2>
          <QRCodeCanvas value={inputText} size={256} />
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
