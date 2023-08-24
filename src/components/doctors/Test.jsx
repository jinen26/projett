import React from 'react'
import Addmodal from './Addmodal'
import Navbar from '../Navbar'
import Doctorscard from './Doctorscard'
import { useState } from 'react'
import './doctors.css'

const Test = ({setDoctors,Doctors,newdoctor,setnewdoctor}) => {
    const [add, setadd] = useState(false);
    const [search, setsearch] = useState("");
  return (
    <div>
      <div className='list'>
      {add?<Addmodal setDoctors={setDoctors} Doctors={Doctors} setadd={setadd} newdoctor={newdoctor}  setnewdoctor={setnewdoctor}/>:null}

      <Navbar/>
     
    <div className='listinfo'>
    <h1>Our Doctors:</h1>
      <p>Providing you with the best telemedicine services is our priority.If you're a doctor, join us for a high-quality & comfortable work experience</p>
      <input className='search' onChange={(e)=>setsearch(e.target.value)} type='text' placeholder='search'/>
      <button className='join' onClick={()=>setadd(true)}>Join us</button>
    </div>
    <div className='cards'>  {Doctors.filter(el=>el.name.toLowerCase().includes(search.toLowerCase())).map(el=><Doctorscard el={el} />)} </div>
    </div>
    </div>
  )
}

export default Test
