import { useState } from "react";
import Navbar from "../Components/Navbar";
import axios from 'axios'
function Register() {
  
  const [name,setName] =useState("")
  const [password,setPassword] =useState("")
  const [email,setEmail] = useState("")
    async function sendDataToBackend(event)
      {
        event.preventDefault()
       await axios.post("http://localhost:3000/register",{
          email: email,
          password: password,
          name: name
        })
      }
    
  console.log(name,password,email)
  
  return (
    <>
    <Navbar/>
    <form onSubmit ={sendDataToBackend} className ="max-w-md mx-auto mt-20 p-6 bg-white border rounded-lg shadow-lg">
  <h2 className="text-2xl font-bold mb-6">Feedback Form</h2>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
      Name:
    </label>
    <input value={name}
  onChange={(e) => setName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name" />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
      Email:
    </label>
    <input    value={email}
  onChange={(e) => setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" />
  </div>
 <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
      password:
    </label>
    <input   value={password}
  onChange={(e) => setPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password" />
  </div>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
    Submit
  </button>
</form>
    </>

  );
}

export default Register;