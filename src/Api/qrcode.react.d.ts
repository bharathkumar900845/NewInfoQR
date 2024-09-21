declare module 'qrcode.react' {
    import React from 'react';
  
    interface QRCodeProps {
      value: string;
      size?: number;
      bgColor?: string;
      fgColor?: string;
      level?: 'L' | 'M' | 'Q' | 'H';
      includeMargin?: boolean;
    }
  
    export default function QRCode(props: QRCodeProps): JSX.Element;
  }
  