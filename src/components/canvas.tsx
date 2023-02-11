import { useState } from 'react';

export default function Canvas() {
  const [state, setState] = useState({
    lines: [], // array of lines drawn on the canvas
    cursor: { x: 0, y: 0 }, // current position of the cursor
    color: '#000000', // color of the lines
    thickness: 2, // thickness of the lines
  });

  return (
    <div className="canvas-container">
      <canvas>
        
      </canvas>
    </div>
  )
}