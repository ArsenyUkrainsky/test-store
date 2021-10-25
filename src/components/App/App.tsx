import React, { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const testButton = () => setCount(x => x +1)
  return (
    <div className="App">
      <h1>Test</h1>
      <p>{count}</p>
      <button onClick={testButton}>прибавить</button>
    </div>
  );
}

export default App;