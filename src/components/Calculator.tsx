import React, { Fragment, useReducer } from 'react';
import Button from './Button';
import Results from './Results';
import  { replaceDot } from '../utils';
import inputReducer from '../utils/reducer';
import Types from '../utils/types';
import { State } from '../utils/reducer/state';

const { 
  EQUAL, 
  AC, 
  DIVIDE, 
  MULTIPLY, 
  SUBTRACT,
  NUMBER, 
  PLUS_MINUS, 
  DOT, 
  ADD,
  PERCENT,
  MC,
  MR,
  M_PLUS,
  M_MINUS,
} = Types;

const Calculator: React.FC<{}> = () => {

  const initialArgs: State = {
    memory: '0',
    storage: '0',
    value: '0',
    operator: '',
    isNew: false,
  };
  
  const [{ memory, value }, dispatch] = useReducer(inputReducer, initialArgs);

  const onButtonClick = (value: String, figure?: string) => {
    switch (value) {
      case AC:
        dispatch({  type: 'AC', });
        break; 
      case PERCENT: 
        dispatch({
          type: 'PERCENT',
        });
        break;
      case PLUS_MINUS: 
        dispatch({ type: 'PLUS_MINUS', });
        break;
      case ADD: 
        dispatch({ type: 'ADD', });
        break;
      case SUBTRACT:
        dispatch({ type: 'SUBTRACT', });
        break;
      case MULTIPLY:
        dispatch({ type: 'MULTIPLY', });
        break;
      case DIVIDE:
        dispatch({ type: 'DIVIDE', });
        break;
      case NUMBER:
        dispatch({
          type: 'NUMBER',
          payload: { value: typeof(figure) === 'string' ? figure : '0', }
        });
        break;
      case DOT: {
        dispatch({ type: 'DOT', });
        break;
      }
      case EQUAL: {
        dispatch({ type: 'EQUAL', });
        break;
      }
      case M_PLUS: {
        dispatch({ type: 'M_PLUS' });
        break;
      }
      case M_MINUS: {
        dispatch({ type: 'M_MINUS' });
        break;
      }
      case MR: {
        dispatch({ type: 'MR' });
        break;
      }
      case MC: 
        dispatch({ type: 'MC' });
        break;
    
      default: return null;
    }
  }

  return (
    <Fragment>
      <Results memory={+memory ? memory : ''}> {replaceDot(value)} </Results>
      <div className="buttons">
        <Button value='AC' onButtonClick={() => onButtonClick(AC)} isLight />
        <Button value={'+/-'} isLight onButtonClick={() => onButtonClick(PLUS_MINUS)} />
        <Button value={'%'} isLight onButtonClick={() => onButtonClick(PERCENT)} />
        <Button value={'÷'} isOrange onButtonClick={() => onButtonClick(DIVIDE)} />
        <Button value={'mc'} onButtonClick={() => onButtonClick(MC)} />
        <Button value={'mr'} onButtonClick={() => onButtonClick(MR)} />
        <Button value={'m-'} onButtonClick={() => onButtonClick(M_MINUS)} />
        <Button value={'m+'} isOrange onButtonClick={() => onButtonClick(M_PLUS)} />
        <Button value={7}  onButtonClick={() => onButtonClick(NUMBER, '7')} />
        <Button value={8}  onButtonClick={() => onButtonClick(NUMBER, '8')} />
        <Button value={9} onButtonClick={() => onButtonClick(NUMBER, '9')} />
        <Button value={'*'} isOrange onButtonClick={() => onButtonClick(MULTIPLY)} />
        <Button value={4}  onButtonClick={() => onButtonClick(NUMBER, '4')} />
        <Button value={5}  onButtonClick={() => onButtonClick(NUMBER, '5')} />
        <Button value={6} onButtonClick={() => onButtonClick(NUMBER, '6')} />
        <Button value={'-'} isOrange onButtonClick={() => onButtonClick(SUBTRACT)} />
        <Button value={1} onButtonClick={() => onButtonClick(NUMBER, '1')} />
        <Button value={2} onButtonClick={() => onButtonClick(NUMBER, '2')} />
        <Button value={3} onButtonClick={() => onButtonClick(NUMBER, '3')} />
        <Button value={'+'} isOrange onButtonClick={() => onButtonClick(ADD)} />
        <Button value={0} isZero  onButtonClick={() => onButtonClick(NUMBER, '0')} />
        <Button value={','} onButtonClick={() => onButtonClick(DOT)} />
        <Button value={'='} isOrange onButtonClick={() => onButtonClick(EQUAL)} />
      </div>
    </Fragment>
  )
}

export default Calculator;
