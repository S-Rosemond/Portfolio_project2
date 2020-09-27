import { createContext } from 'react';

interface IndexContext {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}
export const IndexContext = createContext({} as IndexContext);
