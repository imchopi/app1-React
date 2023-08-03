import React from 'react'

/* Forma 1
  const Title = (props) => {
    const course = props.course --> Forma 1
    return <h1>{course}</h1>
  }
*/

/* Forma 2
  const Title = (props) => {
    const {course} = props --> Forma 2
    return <h1>{course}</h1>
  }
*/

/* Forma 3
  const Title = ({course}) => {
    return <h1>{course}</h1>
  }
*/

// Forma 4 (One liner)
const Title = ({course}) => <h1>{course}</h1>

export default Title