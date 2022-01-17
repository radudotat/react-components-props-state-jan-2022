// 1. Import useState
import { useState } from 'react';

export default function StateExampleForm() {
  // 2. Create state variable (with a starting value in parentheses)
  const [email, setEmail] = useState('');

  return (
    <div>
      <div>
        <label>
          Sign up for our newsletter{' '}
          <input
            type="email"
            // 3. Connect state variable to input value
            value={email}
            onChange={(event) => {
              // 4. Update state variable with new value (text user types in)
              setEmail(event.currentTarget.value);
            }}
          />
        </label>
      </div>
      {/* 5. Show state variable value on page */}
      Email address entered: {email}
    </div>
  );
}
