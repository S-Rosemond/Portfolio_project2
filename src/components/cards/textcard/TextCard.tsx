import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DoubleChevronBtn from '../../button/DoubleChevronBtn';
import { TextProps } from './text';
import './TextCard.css';
import { useIndex } from './../../../context/IndexContext/IndexStateProvider';

const TextCard = ({ textArray }: TextProps) => {
  const { index, setIndex } = useIndex();

  const { title, body } = textArray[index];

  return (
    <div className='text-grid-container'>
      <div className='text-grid-center'>
        <div className='text-card text-card-position test'>
          <h1 className='tc-h1 tc-h1-font-size'>{title}</h1>
          <p className='text-body text-body-decoration text-body-font-size'>
            {body}
          </p>
          <div className='text-btn-container'>
            <Link className='text-btn' to='shop'>
              SHOP NOW
            </Link>
            <img
              className='icon-width arrow-mg'
              src='/images/icon-arrow.svg'
              alt=''
            />
          </div>
        </div>
      </div>

      <DoubleChevronBtn upperBound={textArray.length - 1} />
    </div>
  );
};

export default TextCard;
