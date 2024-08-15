import React from 'react'
import { Link } from 'react-router-dom'
import '../../Style/Signup.css'
import docImg from '../../img/patient-signup.webp'
import google from '../../img/google.png'

export default function Patient() {
  return (
    <div className='doc-con signup-page'>
        
        <div className="doc-img">
            <svg style={{height:'100vh', width: '100%'}} viewBox="0 0 1100 1024"  fill="none">
                <g filter="url(#filter0_d_2_537)">
                    <path d="M-16 0H679.797C679.797 0 807.197 0 861.898 512C916.6 1024 1044 1024 1044 1024H-16V0Z" fill="url(#pattern0_2_537)" shape-rendering="crispEdges"/>
                </g>
                <defs>
                    <filter id="filter0_d_2_537" x="-29" y="-24"  filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="15" dy="4"/>
                    <feGaussianBlur stdDeviation="14"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_537"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_537" result="shape"/>
                    </filter>
                    <pattern id="pattern0_2_537" style={{width: '100%'}} patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use href="#image0_2_537" transform="matrix(0.000464576 0 0 0.00043554 -0.451452 0)"/>
                    </pattern>
                    <image id="image0_2_537" width= "4096"  href={docImg}/>
                </defs>
            </svg> 
            <div className='back-btn'>
                <Link to="/" style={{textDecoration: 'none', color: 'white'}}>Back</Link>
            </div>  
        </div>



        <div className='doc-text'>
            
            <div className='doc-form'>
                <p className='doc-title'>Patients</p>
                <p className='doc-head'>Signup Here</p>
                <form action="post" >    
                    <input type="text" id="username" name="username" placeholder='Username*' required/><br />
                    <input type="text" id="fullName" name="fullName" placeholder='Full Name*' required/><br />
                    <input type="password" id="password" name="password" placeholder='Password*' required/><br/>
                    <input type="text" id="phone" name="phone" placeholder='Phone Number*' required/><br />
                    
                    <div style={{display: 'flex'}}>
                        <input type="date" id="dob" name="dob" placeholder='DOB*' style={{marginRight: '20px'}} required/><br />
                        <select id="dropdown" style={{marginLeft: '10px'}}>
                            <option value="Gender" >Gender</option>
                            <option value="option1">Male</option>
                            <option value="option2">Female</option>
                            <option value="option3">Others</option>
                        </select>
                    </div>
                    <input type="text" id="bloodgrp" name="bloodgrp" placeholder='Blood Group*' required/><br />
                    <input type="text" id="address" name="address" placeholder='Address*' required/><br />
                    <div>
                        <button className='sign-in'>Sign Up</button>
                    </div>
                    <div style={{fontFamily: '"Krub", sans-serif', fontWeight: '400', fontSize: '18px'}}>
                        <p>OR</p>
                    </div>
                    <div className='google'>
                            <hr /><img className='google-icon' src={google} alt="" /><hr />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
