import React from 'react'

const Addmodal = ({setDoctors,setadd,Doctors,newdoctor,setnewdoctor}) => {
  const adddoctor =()=>(setDoctors([...Doctors,newdoctor]))
  return (
    <div className='modal'>
      <div className='modalisa'>
      <button className='deletee' onClick={()=>setadd(false)}>X</button>
       <div className='top'>
      
        <h1>Join us</h1>
        <p>in our mission to make healthcare accessible for all people.</p>
       </div>
        <input  onChange={(e)=>setnewdoctor({...newdoctor,name:e.target.value})} type='text' placeholder='Full name:' required/>
        <input onChange={(e)=>setnewdoctor({...newdoctor,specialty:e.target.value})} type='text' placeholder='Specialty' required/>
        <input onChange={(e)=>setnewdoctor({...newdoctor,state:e.target.value})} type='text' placeholder='State' required/>
        <input onChange={(e)=>setnewdoctor({...newdoctor,image:e.target.value})} type='text' placeholder='image' required/>
        <button className='add'onClick={()=>{setadd(false) ; adddoctor()}}>Join</button>
      </div>
    </div>
  )
}

export default Addmodal
