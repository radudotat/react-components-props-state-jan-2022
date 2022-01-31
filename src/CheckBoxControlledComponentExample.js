import { useState } from 'react';

export default function CheckBoxControlledComponentExample() {
  // 1. Create State variable that control from a boolean type
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      {JSON.stringify(isChecked)} {typeof isChecked}
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="checkbox"
          // 3. for checkboxes use checked prop instead of value
          checked={isChecked}
          // 2. for checkboxes use e.currentTarget.checked instead of e.currentTarget.value
          onChange={(e) => setIsChecked(e.currentTarget.checked)}
        />
      </form>
    </div>
  );
}
