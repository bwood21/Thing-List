import React from 'react'
const Thing = ({thing}) => { //destructuring so only taking thing from App
    return(
        <li className='Thing'>thing.name</li>
    )
}
export default Thing