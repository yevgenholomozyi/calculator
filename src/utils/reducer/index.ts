import Types from "../types";
import add from '../math/add';
import subtract from '../math/subtract';
import divide from '../math/divide';
import multiply from '../math/multiply';
import plusMinus from '../math/plusMinus';
import percent from '../math/percent';
import { State } from './state';

interface Action<T> {
  type: T;
  payload?: any;
}

interface ACAction extends Action<'AC'> {}
interface DotAction extends Action<'DOT'> {}
interface PlusMinusAction extends Action<'PLUS_MINUS'> {}
interface AddAction extends Action<'ADD'> {}
interface subtractlAction extends Action<'SUBTRACT'> {}
interface multiplyAction extends Action<'MULTIPLY'> {}
interface divideAction extends Action<'DIVIDE'> {}
interface percentAction extends Action<'PERCENT'> {}
interface equalAction extends Action<'EQUAL'> {}
interface MCAction extends Action<'MC'> {}
interface MRAction extends Action<'MR'> {}
interface MPlusAction extends Action<'M_PLUS'> {}
interface MminusSAction extends Action<'M_MINUS'> {}
interface NumberAction extends Action<'NUMBER'> {
  payload: { value: string };
}

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

const inputReducer = (
  state: State,
  action:
    | NumberAction
    | ACAction
    | PlusMinusAction
    | DotAction
    | AddAction
    | subtractlAction
    | multiplyAction
    | divideAction
    | percentAction
    | MCAction
    | MRAction
    | MPlusAction
    | MminusSAction
    | equalAction
): State => {
  switch (action.type) {
    case MR:
      return {
        ...state,
        value: state.memory,
      };
    case MC:
      return {
        ...state,
        memory: '0',
        isNew: false,
      };
    case M_MINUS:
      return {
        ...state,
        memory: subtract(+state.memory, +state.value) + '',
        value: '0',
        isNew: false,
      };
    case M_PLUS:
      return {
        ...state,
        memory: add(+state.memory, +state.value) + '',
        value: '0',
        isNew: false,
      };
    case DOT: {
      const { value } = state;
      const updatedValue = value + '.';
      return {
        ...state,
        value: updatedValue,
      };
    }
    case PLUS_MINUS:
      return {
        ...state,
        value: plusMinus(+state.value) + '',
      };
    case PERCENT: {
      const { value } = state;
      return {
        ...state,
        value: percent(+value) + '',
      };
    }
    case NUMBER:
      const { value } = action.payload;
      let outcome = value;
      if (+state.value) {
        outcome = '' + state.value + value;
      }
      return {
        ...state,
        value: outcome,
        isNew: false,
      };
    case ADD:
      return {
        ...state,
        storage: state.value,
        value: '0',
        operator: '+',
      };
    case SUBTRACT:
      return {
        ...state,
        storage: state.value,
        value: '0',
        operator: '-',
      };
    case MULTIPLY:
      return {
        ...state,
        storage: state.value,
        value: '0',
        operator: '*',
      };
    case DIVIDE:
      return {
        ...state,
        storage: state.value,
        value: '0',
        operator: '÷',
      };
    case EQUAL: {
      const { operator, value, storage } = state;
      let result;
      if (operator === '+') {
        result = add(+value, +storage) + '';
        return {
          ...state,
          operator: "",
          value: result,
          storage: '0',
          isNew: true,
        };
      }
      if (operator === "-") {
        result = subtract(+storage, +value) + '';
        return {
          ...state,
          operator: "",
          value: result,
          storage: '0',
          isNew: true,
        };
      }
      if (operator === '*') {
        result = multiply(+storage, +value) + '';
        return {
          ...state,
          operator: "",
          value: result,
          storage: '0',
          isNew: true,
        };
      }
      if (operator === '÷') {
        result = divide(+storage, +value) + '';
        return {
          ...state,
          operator: "",
          value: result,
          storage: '0',
          isNew: true,
        };
      }
      return state;
    }
    case AC:
      return {
        ...state,
        memory: '0',
        value: '0',
        storage: '0',
        operator: '',
        isNew: false,
      };
    default:
      return state;
  }
};

export default inputReducer;