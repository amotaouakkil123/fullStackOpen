const Header = (course) => {
  console.log(course)
  return (
    <div>
      <p>{course.name}</p>
    </div>
  )
}

const Content = ({parts}) => {
  console.log(parts)
  return parts.map(part => (
        <p>Name: {part.name}, Exercises: {part.exercises} </p>
      ));
}

const Total = (a) => {
  return (
    <div>
      <p>Exercises Total = {a.first + a.second + a.third}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
]
  return (
    <div>
      <Header name={course}/>
      <Content parts={parts}/>
      <Total first={parts[0].exercises} second={parts[1].exercises} third={parts[2].exercises}/>
    </div>
  )
}

export default App