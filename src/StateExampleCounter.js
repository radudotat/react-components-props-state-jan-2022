// 1. Import useState
import { useState } from 'react';

export default function StateExampleCounter() {
  // 2. Create state variable (with a starting value in parentheses)
  const [count, setCount] = useState(0);

  // This version doesn't work because
  // React doesn't know about the updates
  // let count = 0;

  return (
    <>
      {/* 4. Show state variable value on the page */}
      Count: {count}
      {/* 3. Update state variable */}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(42)}>meaning of life</button>
      {/*

        This version doesn't work because React
        doesn't know about the updates

        <button
          onClick={() => {
            count = count + 1;
            console.log('count', count);
          }}
        >
          new plus
        </button>
      */}
    </>
  );
}
