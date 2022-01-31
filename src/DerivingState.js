import { useState } from 'react';

function calculatePositiveValues(count1, count2) {
  if (count1 >= 0 && count2 >= 0) {
    return [count1, count2];
  } else if (count1 < 0 && count2 >= 0) {
    return [count2];
  } else if (count1 >= 0 && count2 < 0) {
    return [count1];
  } else if (count1 < 0 && count2 < 0) {
    return [];
  }
}

export default function DerivingState() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // Option 1: Deriving State
  const positiveValues = calculatePositiveValues(count1, count2);

  // Option 2: New State Variable with useEffect
  // const [positiveValues, setPositiveValues] = useState([]);
  // useEffect(() => {
  //   setPositiveValues(calculatePositiveValues(count1, count2));

  //   // if (count1 >= 0 && count2 >= 0) {
  //   //   setPositiveValues([count1, count2]);
  //   // } else if (count1 < 0 && count2 >= 0) {
  //   //   setPositiveValues([count2]);
  //   // } else if (count1 >= 0 && count2 < 0) {
  //   //   setPositiveValues([count1]);
  //   // } else if (count1 < 0 && count2 < 0) {
  //   //   setPositiveValues([]);
  //   // }
  // }, [count1, count2]);

  function handleClickPlusCount1() {
    // const newCount1 = count1 + 1;
    setCount1(count1 + 1);
    // if (count1 > 0) {
    //   positiveValues.push(newCount1);
    // }
  }

  function handleClickMinusCount1() {
    setCount1(count1 - 1);
  }

  function handleClickPlusCount2() {
    setCount2(count2 + 1);
  }

  function handleClickMinusCount2() {
    setCount2(count2 - 1);
  }

  return (
    <div>
      <div>
        {count1}
        <button onClick={() => handleClickPlusCount1()}>+</button>
        <button onClick={() => handleClickMinusCount1()}>-</button>
      </div>

      <div>
        {count2}
        <button onClick={() => handleClickPlusCount2()}>+</button>
        <button onClick={() => handleClickMinusCount2()}>-</button>
      </div>

      <div>
        Positive values: {positiveValues.join(', ')}
        {/* Positive values: {calculatePositiveValues(count1, count2).join(', ')} */}
        {/* Positive values: {count1 >= 0 && count1}
        {count1 >= 0 && count2 >= 0 && ','} {count2 >= 0 && count2} */}
        {/* 1, 2 */}
        {/* {if (count1 >= 0 || count2 >= 0) {
          return <div>{count1} {count2}</div>
        } */}
      </div>
    </div>
  );
}
