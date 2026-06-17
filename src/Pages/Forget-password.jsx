import Navbar from "../Components/Navbar";

function ForgetPassword() {
  return (
   <> 
   <Navbar />
   <div>
      <h1>Register</h1>

      <input type="email" placeholder="enter ur email" />
      <br /><br />
      <button>send otp</button>
    </div>
    </>
  );
}

export default ForgetPassword;