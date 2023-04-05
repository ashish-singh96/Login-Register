import React ,{useState} from 'react'
import './Login.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const Login = () => {
     
  const history=useHistory();

    const[user,setUser]=useState({
          email:'',
          password:'',
    })

    const handleChange =(event)=>{
        const{name,value}=event.target;
        setUser({
            ...user,[name]:value
        })
    }

    const login = async ()=>{
      const {  email, password } = user;
      if (email && password){
     await axios.post('http://localhost:9002/login',user)
      .then(res => console.log(res)).catch((err)=>{
          console.log(err);
      })
    }else{
      alert("Invalid ");
    }
  }
  return (
    
    <div className='login'>
     {console.log(user)};
        <h1>Login</h1>
        <input type="text" name="email" value={user.name} placeholder='Enter your Email' onChange={handleChange}/>
        <input type="password" name="password" value={user.password} placeholder='Enter your Password' onChange={handleChange}/>
        <div className='button' onClick={login}>Login</div>
        <div>or</div>
        <div className='button' onClick={()=>history.push("/register")} >Register</div>
    </div>
  )
}

export default Login