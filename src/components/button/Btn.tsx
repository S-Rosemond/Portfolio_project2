import React from 'react';
import './Btn.css';

interface BtnProps {
  src: string;
  handleClick: (event: React.MouseEvent<Element, MouseEvent>) => void;
}

const Btn = ({ src, handleClick }: BtnProps) => {
  const btnObj = {
    backgroundImage: `url(${src})`,
  };
  console.log(btnObj.backgroundImage);
  return (
    <div onClick={handleClick}>
      <div style={btnObj} className='btn'></div>
    </div>
  );
};

export default Btn;
