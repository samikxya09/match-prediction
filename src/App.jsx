import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/login";
import ForgetPassword from "./Pages/Forget-password";
import ResetPass from "./Pages/ResetPass";


function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>


        <Route path="/" element={< Home />} />
        <Route path="/register" element={< Register />} />
         <Route path="/login" element={< Login />} />
         <Route path="/forgetpass" element={< ForgetPassword />} />
         <Route path="/resetpas" element={< ResetPass />} />

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
