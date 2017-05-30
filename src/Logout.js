import React from 'react'
import './Logout.css'

const Logout = ({signOut}) => {
    return(
        <button className="Logout" onClick={signOut}>
            Sign out
        </button>
    )
}
export default Logout