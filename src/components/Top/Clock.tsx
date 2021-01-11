import React, { useState, useEffect } from 'react';
import { addZero } from '../../utils';

const Clock: React.FC<{}> = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval( () => setTime(new Date()), 1000 );
    return function cleanup() {
        clearInterval(timerID);
      };
   });
  
  const outcomeMins = addZero(time.getMinutes()).toString();
  const outcomeHours = addZero(time.getHours()).toString();
  
  return (
    <div className='clock'>{outcomeHours}:{outcomeMins}</div>
  );
}
 
export default Clock;