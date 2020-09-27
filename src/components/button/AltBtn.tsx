import React from 'react';
import './AltBtn.css';

const AltBtn = ({ src = 'images/icon-angle-left.svg' }: { src?: string }) => {
  return (
    <div>
      <img src={src} alt='' className='alt-btn icon-width' />
    </div>
  );
};

export default AltBtn;
