import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
    <h1>{props.course}</h1>
)

const Part = (props) => (
    <p>
        {props.name} {props.exercises}
    </p>
)

const Content = (props) => (
    <div>
        {props.parts.map((part) => (
            <Part name={part.name} exercises={part.exercises}/>
        ))}
    </div>
)

const Total = (props) => {
    return (<p>Number of exercises {props.numberOfExercises}</p>)
}

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {name: 'Fundamentals of React', exercises: 10},
        {name: 'Using props to pass data', exercises: 7},
        {name: 'State of a component', exercises: 14},
    ]
    const numberOfExercises = parts.reduce((acc, part) => (acc + part.exercises), 0)

    return (
        <div>
            <Header course={course}/>
            <Content parts={parts}/>
            <Total numberOfExercises={numberOfExercises}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
