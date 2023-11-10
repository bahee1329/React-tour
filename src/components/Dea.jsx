import React from 'react'
import '../components/Dea.css'

function Dea(props) {
  return (
    <div className='container2'>
        <img className='image1' src={props.Api2.img} alt="" />

        <div>
          {props.Api2.text1}
        </div>

        <div>
          {props.Api2.text2}
        </div>

        <div className='heading1'>
          {props.Api2.text3}
        </div>

        <div>
          {props.Api2.text4}
        </div>

        <div>
          {props.Api2.text5}
        </div>

        <button className='button'>
            View Details
        </button>
    </div>
  )
}

export default Dea