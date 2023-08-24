import logo from "./logo.svg";
import React from "react";
import Home from "./components/Home/Home";
import "./components/Home/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Patient from "./components/patient/Patient";
import Login from "./components/Login/Login";
import Addmodal from "./components/doctors/Addmodal";
import { useState } from "react";
import Test from "./components/doctors/Test";

function App() {
  const [Doctors, setDoctors] = useState([
    {
      name: "Dr. Amina Ben Ali",
      specialty: "Cardiology",
      image:
        "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg",
      state: "Tunis",
    },
    {
      name: "Dr. Mohamed Khedher",
      specialty: "Dermatology",
      image:
        "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
      state: "Sousse",
    },
    {
      name: "Dr. Salma Mansouri",
      specialty: "Pediatrics",
      image:
        "https://media.istockphoto.com/id/1189304032/photo/doctor-holding-digital-tablet-at-meeting-room.jpg?s=612x612&w=0&k=20&c=RtQn8w_vhzGYbflSa1B5ea9Ji70O8wHpSgGBSh0anUg=",
      state: "Nabeul",
    },
    {
      name: "Dr. Loujayn Mrabet",
      specialty: "Dermatology",
      image:
        "https://t4.ftcdn.net/jpg/03/17/85/49/360_F_317854905_2idSdvi2ds3yejmk8mhvxYr1OpdVTrSM.jpg",
      state: "Gabes",
    },
  ]);
  const [newdoctor, setnewdoctor] = useState({
    name: "",
    specialty: "",
    image: "",
    state: "",
  });

  return (
    <div className="App">
      {/* <Navbar />
      <Home />
      <Doctorslist doctors={doctors} setDoctors={setDoctors}/> */}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/doctors"
          element={
            <Test
              setDoctors={setDoctors}
              Doctors={Doctors}
              newdoctor={newdoctor}
              setnewdoctor={setnewdoctor}
            />
          }
        />
        <Route path="/patient" element={<Patient />} />
        {/* <Doctors Doctors={Doctors} newdoctor={newdoctor} setnewdoctor={setnewdoctor}/> */}
      </Routes>
    </div>
  );
}

export default App;
