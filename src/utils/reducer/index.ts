import Types from "../types";
import add from "../math/add";
import subtract from "../math/subtract";
import divide from "../math/divide";
import multiply from "../math/multiply";
import plusMinus from "../math/plusMinus";
import percent from "../math/percent";
import { State } from "./state";

interface Action<T> {
  type: T;
  payload?: any;
}

interface ACAction extends Action<"AC"> {}
interface DotAction extends Action<"DOT"> {}
interface PlusMinusAction extends Action<"PLUS_MINUS"> {}
interface AddAction extends Action<"ADD"> {}
interface subtractlAction extends Action<"SUBTRACT"> {}
interface multiplyAction extends Action<"MULTIPLY"> {}
interface divideAction extends Action<"DIVIDE"> {}
interface percentAction extends Action<"PERCENT"> {}
interface equalAction extends Action<"EQUAL"> {}
interface MCAction extends Action<"MC"> {}
interface MRAction extends Action<"MR"> {}
interface MPlusAction extends Action<"M_PLUS"> {}
interface MminusSAction extends Action<"M_MINUS"> {}
interface NumberAction extends Action<"NUMBER"> {
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
  let outcome: string = "";
  const checkOperator = (opr: string, stor: string, val: string): string => {
    let result: string = "";
    if (opr === "+") result = add(+stor, +val) + "";
    if (opr === "-") result = subtract(+stor, +val) + "";
    if (opr === "*") result = multiply(+stor, +val) + "";
    if (opr === "÷") result = divide(+stor, +val) + "";
    return result;
  };
  switch (action.type) {
    case MR:
      return {
        ...state,
        value: state.memory,
      };
    case MC:
      return {
        ...state,
        memory: "0",
        isNew: false,
      };
    case M_MINUS:
      return {
        ...state,
        memory: subtract(+state.memory, +state.value) + "",
        value: "0",
        isNew: false,
      };
    case M_PLUS:
      return {
        ...state,
        memory: add(+state.memory, +state.value) + "",
        value: "0",
        isNew: false,
      };
    case DOT: {
      const { value } = state;
      if (value.includes('.')) return state;
      const updatedValue = value + ".";
      return {
        ...state,
        value: updatedValue,
      };
    }
    case PLUS_MINUS:
      return {
        ...state,
        value: plusMinus(+state.value) + "",
      };
    case PERCENT: {
      const { value } = state;
      return {
        ...state,
        value: percent(+value) + "",
      };
    }
    case NUMBER:
      const { value } = action.payload;
      outcome = value;
      if ((+state.value || state.value === "0.") && !state.isNew) {
        outcome = "" + state.value + value;
      }
      return {
        ...state,
        value: outcome,
        isNew: false,
      };
    case ADD: {
      const { value, operator, storage, isNew } = state;
      if (operator) {
        outcome = checkOperator(operator, storage, value);
        return {
          ...state,
          storage: outcome,
          value: outcome,
          isNew: isNew ? isNew : true,
          operator: operator === "+" ? operator : "+",
        };
      }
      return {
        ...state,
        storage: value,
        operator: "+",
        isNew: true,
      };
    }
    case SUBTRACT: {
      const { value, operator, storage, isNew } = state;
      if (operator) {
        outcome = checkOperator(operator, storage, value);
        return {
          ...state,
          storage: outcome,
          value: outcome,
          isNew: isNew ? isNew : true,
          operator: operator === "-" ? operator : "-",
        };
      }
      return {
        ...state,
        storage: state.value,
        operator: "-",
        isNew: true,
      };
    }
    case MULTIPLY: {
      const { value, operator, storage, isNew } = state;
      if (operator) {
        outcome = checkOperator(operator, storage, value);
        return {
          ...state,
          storage: outcome,
          value: outcome,
          isNew: isNew ? isNew : true,
          operator: operator === "*" ? operator : "*",
        };
      }
      return {
        ...state,
        storage: state.value,
        operator: "*",
        isNew: true,
      };
    }
    case DIVIDE: {
      const { value, operator, storage, isNew } = state;
      if (operator) {
        outcome = checkOperator(operator, storage, value);
        return {
          ...state,
          storage: outcome,
          value: outcome,
          isNew: isNew ? isNew : true,
          operator: operator === "÷" ? operator : "÷",
        };
      }
      return {
        ...state,
        storage: state.value,
        operator: "÷",
        isNew: true,
      };
    }
    case EQUAL: {
      const { operator, value, storage } = state;
      let result;
      if (operator === "+") {
        result = add(+value, +storage) + "";
        return {
          ...state,
          operator: "",
          value: result,
          storage: "0",
          isNew: true,
        };
      }
      if (operator === "-") {
        result = subtract(+storage, +value) + "";
        return {
          ...state,
          operator: "",
          value: result,
          storage: "0",
          isNew: true,
        };
      }
      if (operator === "*") {
        result = multiply(+storage, +value) + "";
        return {
          ...state,
          operator: "",
          value: result,
          storage: "0",
          isNew: true,
        };
      }
      if (operator === "÷") {
        result = divide(+storage, +value) + "";
        return {
          ...state,
          operator: "",
          value: result,
          storage: "0",
          isNew: true,
        };
      }
      return state;
    }
    case AC:
      return {
        ...state,
        value: "0",
        storage: "0",
        operator: "",
        isNew: false,
      };
    default:
      return state;
  }
};

export default inputReducer;
