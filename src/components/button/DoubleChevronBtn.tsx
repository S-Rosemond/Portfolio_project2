import React from 'react';
import './DoubleChevronBtn.css';
import { useIndex } from './../../context/IndexContext/IndexStateProvider';
import Btn from './Btn';

interface Props {
  upperBound: number;
}

const DoubleChevronBtn = ({ upperBound }: Props) => {
  const { setIndex } = useIndex();

  const handleIndex = (operator?: string | undefined) => {
    if (operator === 'add')
      setIndex((prev) => {
        if (prev + 1 > upperBound) return prev;
        return prev + 1;
      });
    else
      setIndex((prev) => {
        if (prev - 1 < 0) return prev;
        return prev - 1;
      });
  };

  return (
    <div className='db-icon-align'>
      <Btn
        handleClick={handleIndex.bind(null, undefined)}
        src='/images/icon-angle-left.svg'
      />
      <Btn
        handleClick={handleIndex.bind(null, 'add')}
        src='/images/icon-angle-right.svg'
      />
    </div>
  );
};

export default DoubleChevronBtn;
