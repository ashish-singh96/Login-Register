import React, { useState } from 'react'
import './Register.css';
import axios from "axios";
import { useHistory } from 'react-router-dom';
const Register = () => {

  const history = useHistory();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    reEnterPassword: '',

  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user, [name]: value
    })
  }

  const register = async () => {
    const { name, email, password, reEnterPassword } = user
    if (name && email && password && (password === reEnterPassword)) {

      await axios.post("http://localhost:9002/register", user)
        .then(res => console.log(res)).catch((err) => {
          console.log(err);
        })
    } else {
      alert("Invalid ")
    }
  }
  return (
    <div className='register'>
      <h1>Register</h1>
      <input type="text" name="name" value={user.name} placeholder='Your Name' onChange={handleChange} />
      <input type="text" name="email" value={user.email} placeholder='Your Email' onChange={handleChange} />
      <input type="password" name="password" value={user.password} placeholder='Enter Password' onChange={handleChange} />
      <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder='Re-enter Password' onChange={handleChange} />
      <div className='button' onClick={register}>Register</div>
      <div>or</div>
      <div className='button' onClick={() => history.push("/login")} >Login</div>
    </div>
  )
}

export default Register