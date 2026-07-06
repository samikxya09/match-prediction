import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/login";
import ForgetPassword from "./Pages/Forget-password";
import ResetPass from "./Pages/ResetPass";
import Team from "./Pages/team";
import Match from "./Pages/Match";


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
         <Route path="/team" element={<Team />} />
        <Route path="/match" element={<Match />}  />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
