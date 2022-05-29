import React from 'react';

import './style.css';

const Hello = ({ name, age }) => {
  return (
    <div>
      <p>Hello {name}</p>
    </div>
  );
};

const App = () => {
  const name = 'Dipankar';
  const age = 28;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age={age} />
      <Hello name="Daisy" age={10 + 12} />
      <Hello name="George" age={44 + 2} />
    </div>
  );
};
export default App;
