import { useState } from 'react';

// Steps for a controlled input
// 1. state variable for the value
// 2. onChange event handler for the update of the value
// 3. connect the current value to the input !this is important

// possible errors
// input text not updating at all. => onChange event not set up
// CAUTION: the input must have value property

export default function ControlledComponentsAndForms() {
  // step 1
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [select, setSelect] = useState('');

  return (
    <div>
      {name}
      {lastName}
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>
          Name:
          <input
            onChange={(e) => {
              // step 2
              setName(e.currentTarget.value);
            }}
            value={name}
          />
        </label>
        <label>
          Last Name:
          <input
            onChange={(e) => setLastName(e.currentTarget.value)}
            value={/* step 3 */ lastName}
          />
        </label>

        <select
          onChange={(e) => setSelect(e.currentTarget.value)}
          name="pets"
          id="pet-select"
          value={select}
        >
          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </select>

        <button
          onClick={() => {
            console.log(
              `call an API with the values of ${name} and ${lastName}, drop down ${select}`,
            );
          }}
        >
          submit
        </button>
      </form>
    </div>
  );
}
