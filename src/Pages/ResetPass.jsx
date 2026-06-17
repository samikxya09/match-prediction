import Navbar from "../Components/Navbar";

function ResetPass() {
  return (
    <>
    <Navbar />
    <div>
      <h1>resetpassword</h1>
      <input type="text" placeholder="otp" />
      <br /> <br />
      <input type="password" placeholder="new password" />
      <br /> <br />



      

      <button>Register</button>
    </div>
    </>

  );
}
  export default ResetPass;