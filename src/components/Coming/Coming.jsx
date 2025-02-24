import React from 'react'
import './Coming.css'

function Coming({ image, type, title, date }) {
  return (
    <div className='coming'>
        <div className="coming-image-container">
            <img src={image} alt="" />
        </div>
         <h6>{type}</h6>
         <h2>{title}</h2>
         <h5>{date}</h5>
    </div>
  )
}

export default Coming