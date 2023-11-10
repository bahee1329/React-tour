import React from 'react'
import '../components/Deals.css'
import Dea from './Dea'
import Api2 from '../Api2'

function Deals() {
  return (

    <div className='container1'>
        <div className='upper'>
            offers
        </div>

        <div className='center'>
        {Api2.map((element, index) => (
            <Dea Api2={element} key={index} />
            
          ))}
        </div>
        <button className='lower'>
            viewall
        </button>
    </div>
  )
}

export default Deals