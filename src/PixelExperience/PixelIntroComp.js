import React from 'react';

function PixelIntro ({header, subheader}) {
  return (
    <div className="pixel-header">
          <p>{header}</p>
          <p className="pixel-intro" style={{textAlign: "center"}}>{subheader}</p>
    </div>
    )
}

export default PixelIntro