export const replaceDot = (str: string): string => str.replace(/\./g, ",");
export const addZero = (num: number) => (num < 10 ? `0${num}` : `${num}`);
