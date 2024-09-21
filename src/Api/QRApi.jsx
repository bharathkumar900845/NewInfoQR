import React, { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import './QRApi.css';

const QRCodeGenerator = () => {
  const [inputText, setInputText] = useState('');
  const [format, setFormat] = useState('png'); // Default format
  const qrCodeRef = useRef();

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleFormatChange = (event) => {
    setFormat(event.target.value);
  };

  const downloadQRCode = () => {
    const canvas = qrCodeRef.current.querySelector('canvas');
    if (canvas) {
      const imageFormat = format === 'jpeg' ? 'image/jpeg' : 'image/png';
      const size = 256; // Size of the QR code
      const whiteCanvas = document.createElement('canvas');
      const ctx = whiteCanvas.getContext('2d');
      
      // Set the dimensions of the white canvas
      whiteCanvas.width = size + 20; // Add some padding
      whiteCanvas.height = size + 20; // Add some padding

      // Fill the canvas with white color
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, whiteCanvas.width, whiteCanvas.height);

      // Draw the QR code on the white canvas
      ctx.drawImage(canvas, 10, 10, size, size); // Centered with padding

      // Create a download link
      const imageUrl = whiteCanvas.toDataURL(imageFormat);
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = `qr_code.${format}`;
      link.click();
    }
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
      <div className='container'>
        {inputText && (
          <div className='qr' ref={qrCodeRef}>
            <div className='iconhead'>
              <select value={format} onChange={handleFormatChange} style={{ marginBottom: '10px' }}>
                <option value="png">PNG</option>
                <option value="jpeg">JPEG</option>
              </select>
              <button type="button" className='downloadicon' onClick={downloadQRCode}>
                <img src="Download.png" alt="Download" className='downloadicon'/>
              </button>
            </div>
            <h2>Your QR Code:</h2>
            <QRCodeCanvas value={inputText} size={256} />
            <br/><br/>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
