import React from 'react'
import Emplyee from '../Programers/Emplyee'
import SevicesCompany from '../Servicess/SevicesCompany'
import './Company.css'

function CompnyName(c) {
  return (
    <div>
      <div className='company'>
      <p>Company Name: {c.name}</p>
      <p>Number of Emplyee: {c.number}</p>
      <p>Year Founded: {c.year}</p>
      </div>
      
      <p className={c.name == "Tuwaiq"?"par":"gry"}>
      <Emplyee name="Ahmed" proglang="JavaScript" yearex="10"/>
      <Emplyee name="Khaled" proglang="Java" yearex="5"/>
      <Emplyee name="Khaled" proglang="C++" yearex="8"/> 
      </p>
      
      
      <SevicesCompany name="web" text="App" par="Test"/>
    </div>
  )
}

export default CompnyName