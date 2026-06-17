import Navbar from "../Components/Navbar";

function Login(){
    return(
        <>
        <Navbar />
        <div>
       <h1>loginn</h1>
       <input type="email" placeholder="Email" />
       <br /><br />
       <input type="password" placeholder="password" />
     
       <br /><br />
       
        <button>login</button>
        </div>
      </>

    );
}
export default Login;