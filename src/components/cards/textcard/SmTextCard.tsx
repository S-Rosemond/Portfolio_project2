import React from 'react';
import { Text } from './text';
import './SmTextCard.css';

// Omit, omits x field, Partial makes props of T optional
type CardText = Omit<Text, 'img'>;

const SmTextCard: React.FC<Partial<CardText>> = ({ title, body }) => {
  return (
    <div className='sm-card-container test'>
      <h2 className='sm-card-title smc-font-size'>{title}</h2>
      <p className='sm-card-body smc-body-font-size'>{body}</p>
    </div>
  );
};

SmTextCard.defaultProps = {
  title: 'About our furniture',
  body:
    'Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.',
};

export default SmTextCard;
