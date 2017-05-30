import React from 'react'
import './Login.css'
import {auth,githubProvider} from'./base'

const Login = ({authHandler}) => {
    const authenticate = (provider) =>{
        auth.signInWithPopup(provider).then(authHandler) //github provider , changed for scalability
    }
    return(
        <button className="Login" onClick={()=>authenticate(githubProvider)}>
            Sign in with Github
        </button>
    )
}
export default Login