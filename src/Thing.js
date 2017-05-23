import React from 'react'
import './Thing.css'
const Thing = ({thing}) => { //destructuring so only taking thing from App
    return(
        <li className='Thing'>{thing.name}</li>  //remove contentEditable
    )
}
export default Thing