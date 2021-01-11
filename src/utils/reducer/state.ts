export interface State {
  storage: string /* for regular operations, e.g., ADD, DIVIDE etc */;
  memory: string /* for MC, MR, M_PLUS, M_MINUS */;
  value: string /* value to show */;
  operator: string;
  isNew: boolean;
}
