import React, {useState} from 'react'
import './Register.css';
const Register = () => {
    const[user,setUser]=useState({
        name:'',
        email:'',
        password:'',
        reEnterPassword:'',

    })

    const handleChange =(event)=>{
        const{name,value}=event.target;
        setUser({
            ...user,[name]:value
        })
    }
  return (
    <div className='register'>
    <h1>Register</h1>
    <input type="text" name="name" value={user.name} placeholder='Your Name' onChange={handleChange}/>
    <input type="text"  name="email" value={user.email} placeholder='Your Email' onChange={handleChange}/>
    <input type="password"  name="password" value={user.password} placeholder='Enter Password' onChange={handleChange}/>
    <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder='Re-enter Password' onChange={handleChange}/>
    <div className='button'>Register</div>
    <div>or</div>
    <div className='button'>Login</div>
    </div>
  )
}

export default Register