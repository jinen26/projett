import React from 'react'
import './patient.css'
import Home from '../Home/Home'
import {  useNavigate } from 'react-router-dom'


const Patient = () => {
  const navigate = useNavigate();
  return (
    <div className='dashboard'>
      <div className='container'>
        <div className='sidebar'>
        <h1>Healthcare app</h1>
        <h2>Menu</h2>
        <ul>
          <li> <button className='homy' onClick={()=>navigate("/")}>Home</button></li>
          <li>Doctors</li>
          <li>My appointements</li>
          <li>Settings</li>
          <li>Contact</li>
          

        </ul>
        <div className='help'>
           <h1>Help center</h1>
           <p>Having a trouble <br/> in our healthcare app?<br/>
            <a href='#'>please contact us</a> 
           </p>
          
          </div>
      </div>
      <div className='main'>
      <div className='top'>
       <div className='super'>
     <h1>Welcome to your profile.</h1>
        <p>Hello friend,welcome back!</p>
     
       </div>
       
        <div className='card1'><h1>Make an appointement</h1>
        <p>Choose the best time for your next appointement!</p>
        <button className='book'>Book now</button>
        <button className='daktour'  onClick={()=>navigate("/doctors")}>Doctors</button>
       
        </div>
        
       

      </div>
      <div className='card2'>
          <h1>My stat:</h1>
          <h2>Today:</h2>
          <p>None</p>
          <h3>This month:</h3>
          <p>30th Aug</p>
          <a href='#'>Go to my appointements</a>
        </div>
      
      </div>
      </div>
    </div>
  )
}

export default Patient

