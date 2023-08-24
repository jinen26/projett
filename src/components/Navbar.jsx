import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login/Login";
import Home from "./Home/Home";


const Navbar = () => {
  const navigate=useNavigate()
  const [login, setlogin] = useState(false);
  const [show, setshow] = useState(0);
  return (
    <div className="header">
      <h1>Healthcare app</h1>
      <nav>
        {login ? <Login setlogin={setlogin} /> : null}

        <span onClick={()=>navigate("/")} className="normal">
          Home
        </span>
        <span  className="normal" onClick={()=>navigate("/doctors")} >
          Telemedicine
        </span>
        <button className="buttonin" onClick={()=>setshow(1)}>
          <span >Specialists</span>
        </button>
        <button className="buttonout" onClick={() => setlogin(true)}>
          <span >Login</span>
        </button>
        {/* {show===0?<Home />:show===1?<Doctorslist setshow={setshow}/>:null} */}

      </nav>
    </div>
  );
};

export default Navbar;
