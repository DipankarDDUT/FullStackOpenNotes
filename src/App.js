import React from 'react';

import './style.css';
import Header from './Header.js';
import Content from './Content.js';

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ];
  console.log(parts[0], parts[1], parts[2]);
  return (
    <div>
      <Header course={course} />
      <Content part1={parts[0]} part2={parts[1]} part3={parts[2]} />
      {/* <Total ... /> */}
    </div>
  );
};

export default App;
