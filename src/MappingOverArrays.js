export default function MappingOverArrays() {
  // base Array
  const fruits = ['apple', 'banana', 'papaya', 'melon', 'kiwi'];

  // Array hard coded
  const manualCakes = ['appleCake', 'bananaCake', 'papayaCake'];

  // Array created with map method
  const cakes = fruits.map((singleFruit) => {
    return singleFruit + 'Cake';
  });

  // Array of JSX hard coded
  const jsxArray = [
    <div key="first">first</div>,
    <div key="second">second</div>,
    <div key="third">third</div>,
  ];

  // Array of JSX with map method
  const jsxFruits = fruits.map((singleFruit) => {
    return <div key={`fruit-${singleFruit}`}> {singleFruit} </div>;
  });

  return (
    <div>
      <div> raw array cakes: {JSON.stringify(cakes)}</div>
      <div>cakes: {cakes}</div>
      <div>manual cakes: {manualCakes}</div>
      {jsxArray}
      <br />
      {jsxFruits}
    </div>
  );
}
