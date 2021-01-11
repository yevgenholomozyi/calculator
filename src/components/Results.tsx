import React from 'react';
import { replaceDot } from '../utils';
export interface ResultsProps {
  children: React.ReactNode;
  memory: string;
}
 
const Results: React.FC<ResultsProps> = ({ children, memory }) => {
  return (
    <div className = 'results'>
      <span className = 'results__memory'>{ replaceDot(memory) }</span> 
      { children }
    </div>
  );
}
 
export default Results;
