```javascript
// pages/aboutSolution.js
import {useEffect, useState} from 'react';

export default function About() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('About page mounted');
    return () => {
      console.log('About page unmounted');
    };
  }, []);
  
  useEffect(() => {
    let intervalId;
    const startInterval = () => {
      intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    };

    const stopInterval = () => {
      clearInterval(intervalId);
    };

    startInterval();
    return stopInterval; 
  }, []);

  return (
    <div>
      <h1>About Us</h1>
      <p>Count: {count}</p>
    </div>
  );
}
```