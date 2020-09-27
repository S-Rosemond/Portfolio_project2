import React, { useState, useContext } from 'react';
import { IndexContext } from '../contexts';

const IndexStateProvider: React.FC = (props) => {
  const [index, setIndex] = useState(0);

  return (
    <IndexContext.Provider value={{ index, setIndex }}>
      {props.children}
    </IndexContext.Provider>
  );
};

export function useIndex() {
  return useContext(IndexContext);
}

export default IndexStateProvider;
