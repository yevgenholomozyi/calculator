import React, { Fragment } from 'react';
import { replaceDot } from '../utils';
export interface ResultsProps {
  children: React.ReactNode;
  memory: string;
  currentOperation: string
}
 
const Results: React.FC<ResultsProps> = ({ children, memory, currentOperation }) => {
  const resultCurrentOperation = currentOperation;
  return (
    <Fragment>
      <div className = 'results__current-operation'>{ resultCurrentOperation }</div>
      <div className = 'results'>
        <span className = 'results__memory'>{ replaceDot(memory) }</span> 
        { children }
      </div>
    </Fragment>
  );
}
 
export default Results;
