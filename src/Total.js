import React from 'react';

const Total = ({ course }) => {
  console.log(course);
  return (
    <div>
      {course.parts[0].exercises +
        course.parts[1].exercises +
        course.parts[2].exercises}
    </div>
  );
};

export default Total;
