import { useState } from 'react';

export default function StateNotSynchronous() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      please open the console
      <button
        onClick={() => {
          // this is a problem
          // console.log('before', number);
          // setNumber(1);
          // console.log('after', number);
          // solution
          const newNumber = 1;
          console.log('before', number);
          setNumber(newNumber);
          console.log('after', newNumber);
        }}
      >
        click
      </button>
    </div>
  );
}
