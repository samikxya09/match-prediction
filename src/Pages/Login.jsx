import { useState } from "react";
import Navbar from "../Components/Navbar";
import axios from 'axios'
function Login(){
  const[email,setEmail]= useState("")
  const[password,setPassword] = useState("")


 async function sendDataToBackend(event)
      {
        event.preventDefault()
       await axios.post("http://localhost:3000/Login",{
          email: email,
          password: password,
          
        })
      }
    


  /*   
  conts[data,setdata] = useState({
  name:"",
  password:"",
  email:""
  
  })
  
  
  
  */
  
    return(
        <>

        <Navbar />
        <form onSubmit ={sendDataToBackend}>
        <div>
       <h1>loginn</h1>
       <input type  value={email}
  onChange={(e) => setEmail(e.target.value)}  placeholder="Email" />
       <br /><br />
       <input type  value={password}
  onChange={(e) => setPassword(e.target.value)} placeholder="password" />
     
       <br /><br />
       
        <button type = "submit" >login</button>
        </div>
        </form>
      </>

    );
}
export default Login;