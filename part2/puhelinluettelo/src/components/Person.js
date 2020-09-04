import React from 'react'

/* exercise 2.6 */
const Person = ({ person }) => {
	return (
		<li>
			{/* exercises 2.6 and 2.7 */}
			{/* {person.name} */}
			{/* exercise 2.8 */}
			{person.name} {person.number}
		</li>
	)
}

export default Person