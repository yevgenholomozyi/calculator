import add from '../add';
import divide from '../divide';
import multiply from '../multiply';
import percent from '../percent';
import plusMinus from '../plusMinus';
import subtract from '../subtract';

let a: number;
let b: number;
beforeEach(() => {
  a = Math.random()*100;
  b = Math.random()*100;
});
describe('math works correctly', () => {
  it('adds numbers correctly', () => {
    expect(add(a, b)).toBe(+(a+b).toFixed(5));
  });
  it('subtacts numbers correctly', () => {
    expect(subtract(a, b)).toBe(+(a-b).toFixed(5));
  });
  it('mulitplies numbers correctly', () => {
    expect(multiply(a, b)).toBe(+(a*b).toFixed(5));
  });
  it('divides numbers correctly', () => {
    expect(divide(a, b)).toBe(+(a/b).toFixed(5));
  });
  it('changes +- correctly', () => {
    expect(plusMinus(a)).toBe(a*-1);
  });
  it('finds percent correctly', () => {
    expect(percent(a)).toBe(+(a/100).toFixed(5));
  });
});
