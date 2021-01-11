import React from 'react';
export interface ButtonProps {
  value: Number | String;
  isZero?: Boolean;
  isOrange?: Boolean; 
  isLight?: Boolean;
  onButtonClick?: () => void; 
}
const Button: React.FC<ButtonProps> = ({ value, isZero, isOrange, isLight, onButtonClick }) => {
  const classes = (): string => {
    const classNames = ['btn'];
    if (isZero) classNames.push('zero');
    if (isOrange) classNames.push('orange');
    if (isLight) classNames.push('light');
    return classNames.join(' ');
  }
  return ( <button onClick={onButtonClick} className={classes()}>{value}</button> );
}
 
export default Button;
