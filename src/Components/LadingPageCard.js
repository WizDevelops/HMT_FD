import React from 'react'
import '../Style/LandingPageCard.css'

export default function LadingPageCard(props) {
  return (
    <div className='card-con'>
        <div className='card-img'>
            <img src= {props.imageSrc} alt="" style={{width: '300px', height: '250px'}} />
        </div>
        <div className='card-body'>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    </div>
  )
}
