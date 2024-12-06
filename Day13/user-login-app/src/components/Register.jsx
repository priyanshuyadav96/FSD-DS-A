import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = ({regData}) => {
    const [name,setName] = useState();
    const [password,setPassword] = useState();
    const [email,setEmail] = useState();
    const data = {name,email,password};
    const handleregister=(e)=>{
        e.preventDefault();
        alert("Lord Of Cinder Fallen");
        regData(data)
    }
  return (
    <div>
        {name},
        {password},
        {email}
    <form >
    <div className="form-group">
    <label htmlFor="name">Name:</label>
    <input type="text" className="form-control" id="name" onChange={(e)=>{setName(e.target.value)}} />
    </div>
    <div className="form-group">
    <label htmlFor="email">Email address:</label>
    <input type="email" className="form-control" id="email" onChange={(e)=>{setEmail(e.target.value)}}/>
    </div>
    <div className="form-group">
    <label htmlFor="pwd">Password:</label>
    <input type="password" className="form-control" id="pwd"onChange={(e)=>{setPassword(e.target.value)}}/>
    </div>
    <button type="submit" onClick={handleregister} className="btn btn-primary">Submit</button>
    </form>
    </div>
  )
}

export default Register