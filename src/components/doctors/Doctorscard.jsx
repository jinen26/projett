import React from 'react'
import meet from '../../img/googlemeet.png'


const Doctorscard = ({el}) => {
  
  return (
    
     <div className='card'> <h1>{el.name}</h1>
      <h2>{el.specialty}</h2>
      <h3>{el.state}</h3>
      <img src={el.image}/>
      <div className='btn'>
        <button className='real'> an Appointement</button>
         <button className='virtual'><img src={meet}/></button>
      </div></div>

  )
}

export default Doctorscard
