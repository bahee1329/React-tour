import React from 'react'
import '../components/Exp.css'
import pto2 from '../assets/2.jpg'

function Exp(props) {
  return (
    <div className='conatinerin'>
        <img src={props.Api.img} className='image' alt="" />
        <h3 className='text'>{props.Api.text}</h3>
    
    </div>
  )
}

export default Exp