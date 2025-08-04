import { generateCliCommands } from '@/utils/utils';

import code from '@content/Animations/MetallicPaint/MetallicPaint.jsx?raw';
import css from '@content/Animations/MetallicPaint/MetallicPaint.css?raw';
import tailwind from '@tailwind/Animations/MetallicPaint/MetallicPaint.jsx?raw';
import tsCode from '@ts-default/Animations/MetallicPaint/MetallicPaint.tsx?raw';
import tsTailwind from '@ts-tailwind/Animations/MetallicPaint/MetallicPaint.tsx?raw';

export const metallicPaint = {
  ...(generateCliCommands('Animations/MetallicPaint')),
  usage: `import MetallicPaint, { parseLogoImage } from "./MetallicPaint";
import { useState, useEffect } from 'react';

// Create a canvas with text for the metallic effect
const Component = () => {
  const [imageData, setImageData] = useState<ImageData | null>(null);

  useEffect(() => {
    // Create a simple canvas with text
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 100;
    const ctx = canvas.getContext('2d');
    
    // Set background
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add text
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Your Text Here', canvas.width / 2, canvas.height / 2);
    
    // Get image data
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    setImageData(imageData);
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <MetallicPaint 
        imageData={imageData ?? new ImageData(1, 1)} 
        params={{ edge: 2, patternBlur: 0.005, patternScale: 2, refraction: 0.015, speed: 0.3, liquid: 0.07 }} 
      />
    </div>
  );
}`,
code,
css,
tailwind,
tsCode,
tsTailwind
};