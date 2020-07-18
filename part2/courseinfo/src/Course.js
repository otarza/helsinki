import React from 'react';

const Course = ({ course }) => {
  const Header = props => <h1>{props.course}</h1>;

  const Part = props => (
    <p>
      {props.name} {props.exercises}
    </p>
  );

  const Content = props => (
    <div>
      {props.parts.map(part => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );

  const Total = props => {
    return <p>Number of exercises {props.numberOfExercises}</p>;
  };

  const numberOfExercises = course.parts.reduce(
    (acc, part) => acc + part.exercises,
    0
  );

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total numberOfExercises={numberOfExercises} />
    </div>
  );
};

export default Course;
