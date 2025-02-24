import React from 'react'
import './Courses.css'

function Courses({ image, title, description }) {
  return (
    <div className='course-card'>
        <div className="image-container">
            <img src={image} alt="" />
        </div>
        <div className="infos">
            <h5></h5>
            <h1>{title}</h1>
            <p>{description}</p>
            <button>En savoir plus</button>
        </div>
    </div>
  )
}

export default Courses