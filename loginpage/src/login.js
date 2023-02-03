import React, { useState } from "react";
import './login.css'

let db = {
    username: 'Varsha@gmail.com',
    password: 'Varsha@123'
}
function Login(){
    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")
    let [log, setLog] = useState("")
    function validate(){
        if(username === db.username & password === db.password){
            setLog("Logged in successfully")
        }
        else{
            setLog("Username and Password is incorrect")
        }
    }
    return (
        <div className="loginpage">
            
            <p>{username}</p>
            <p>{password}</p>
            <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter UserName"></input>
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password"></input>
            <button onClick={validate}>Login</button>
            <p>{log}</p>
            
        </div>
    )
}

export default Login;