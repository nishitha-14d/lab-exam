
import React, { useState } from 'react';

function App() {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <h1>Counter Application</h1>

      <h2>Counter 1: {count1}</h2>

      <button onClick={() => setCount1(count1 + 1)}>
        Increment
      </button>

      <button onClick={() => setCount1(count1 - 1)}>
        Decrement
      </button>

      <h2>Counter 2: {count2}</h2>

      <button onClick={() => setCount2(count2 + 1)}>
        Increment
      </button>

      <button onClick={() => setCount2(count2 - 1)}>
        Decrement
      </button>

    </div>
  );
}

export default App;
