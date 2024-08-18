import React,{useState,useContext} from 'react'
import Usercontext from '../context/Usercontext'





function Login() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState(' ')
    const {setUser} = useContext(Usercontext)

   const  handleSubmit=(e)=>{
        
       
        e.preventDefault()

        setUser({username,password})


    }

  return (
    <div>
    <h1>Login</h1>
    <input type='text' placeholder='Enter User name'
     value={username} onChange={(e)=>setUsername(e.target.value)} />
    <input type='password' placeholder='password' 
    value={password} onChange={(e)=>setPassword(e.target.value)} />
    <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
