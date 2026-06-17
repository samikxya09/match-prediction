import { Link } from "react-router-dom";
import Button from "./button";

function Navbar() {
  return (
    
         <nav className="flex justify-between items-center px-10 py-5">
      
      {/* Logo and App Name */}
      <div className="flex items-center gap-3">
        <h1 className="text-4xl">⚽</h1>
        <h1 className="text-2xl font-bold text-white">
          Match Prediction
        </h1>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
       <Link to = "/login">
        <Button
          text="Login"
          style="border border-white text-white hover:bg-white hover:text-black"
        /></Link>
        <Link to = "/register">
        <Button
          text="Register"
          style="bg-green-500 text-white hover:bg-green-600"
        /> </Link>
      </div>

    </nav>

      /* <button>Register</button>
      <button>Login</button> */
       
  );
}

export default Navbar;