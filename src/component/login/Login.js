import React ,{useState} from 'react'
import './Login.css';
const Login = () => {
    const[user,SetUser]=useState({
        email:'',
        password:'',
    })
    const handleChange =(event)=>{
        const{name,value}=event.target;
        SetUser({
            ...user,[name]:value
        })
    }
  return (
    
    <div className='login'>
     {console.log(user)};
        <h1>Login</h1>
        <input type="text" name="email" value={user.name} placeholder='Enter your Email' onChange={handleChange}/>
        <input type="password" name="password" value={user.password} placeholder='Enter your Password' onChange={handleChange}/>
        <div className='button'>Login</div>
        <div>or</div>
        <div className='button'>Register</div>
    </div>
  )
}

export default Login