import React from 'react';
import Clock from './Clock';
import Image from './Image';

const Top: React.FC<{}> = () => {
  return (
    <div className='top'>
      <Clock />
      <Image />     
    </div>
  );
}
 
export default Top;