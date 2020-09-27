import React from 'react';
import './ImageCard.css';
import { useIndex } from './../../../context/IndexContext/IndexStateProvider';
import { TextProps } from '../textcard/text';

const ImageCard: React.FC<TextProps> = ({ textArray }) => {
  const { index } = useIndex();

  const imgObj = {
    backgroundImage: `url(${textArray[index].img})`,
  };

  return <img className='img img-card' src={textArray[index].img} alt='' />;
};

export default ImageCard;
