import React from 'react'

/* exercises 2.2 and 2.3 */
/* const Total = ({course}) => {
    const sum = course.parts.reduce((accumulator, current) => accumulator + current.exercises, 0);
    return (
        <p>
            <b>Total of {sum} exercises</b>
        </p>
    )
}; */

/* exercises 2.4 */
const Total = ({ parts }) => {
    const sum = parts.reduce((accumulator, current) => accumulator + current.exercises, 0);
    return (
        <p>
            <b>Total of {sum} exercises</b>
        </p>
    )
};

export default Total