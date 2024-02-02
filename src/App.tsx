import { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  let title = 'counter 계산기';

  const counterFunction = (number: string) => {
    if (number === 'plus') {
      setCount(count + 1);
    } else if (number === 'minus') {
      setCount(count - 1);
    } else if (number === 'reset') {
      setCount(0);
    }
  };

  return (
    <div className='App'>
      <h1 className='black-nav'>
        <h4>{title} </h4>
      </h1>

      <div>
        <div>Counter : {count}</div>
        <button onClick={() => counterFunction('plus')}>+</button>
        <button onClick={() => counterFunction('minus')}>-</button>{' '}
        <button onClick={() => counterFunction('reset')}>Reset</button>
      </div>
    </div>
  );
}

export default App;
