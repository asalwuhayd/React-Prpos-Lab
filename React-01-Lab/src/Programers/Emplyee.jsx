import React from 'react'
import './Emplyee.css' 
function Emplyee(p) {
  return (
    <div >
     <p >Name is: {p.name}</p>
     <p>Programming languages is: {p.proglang}</p> 
     <p>Years of Experience is: {p.yearex}</p>     
    </div>
  )
}

export default Emplyee