import React from 'react'
import { Link } from 'react-router-dom'
import '../../Style/Login.css'
import patientLogin from '../../img/patientLogin.webp'
import patientLogo from '../../img/patientlogo.png'
import google from '../../img/google.png'

export default function Patients() {
  return (
    <div className='doc-con'>
        
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
                    <image id="image0_2_537" width= "4096"  href={patientLogin}/>
                </defs>
            </svg> 
            <div className='back-btn'>
                <Link to="/" style={{textDecoration: 'none', color: 'white'}}>Back</Link>
            </div>  
        </div>



        <div className='doc-text'>
            
            <div className='doc-form'>
            <img className='logo-img' src={patientLogo} alt='Patient Logo' />
                <p className='doc-title'>Patients</p>
                <p className='doc-head'>Sign in to your account</p>
                <form action="post" >    
                    <input type="text" id="username" name="username" placeholder='Username*' required/><br />
                    <input type="password" id="password" name="password" placeholder='Password*' required/>
                    <div className='forgot'>
                        <div style={{display: 'flex'}}>
                            <input type="checkbox" id="remember" name="remember" style={{fontSize: '15px',cursor: 'pointer'}}/>
                            <label for="remember" style={{fontSize: '12px', cursor: 'pointer'}}>Remember Me</label>
                        </div>
                        <div>
                            <a href="">Forgot Password</a>
                        </div>
                    </div>
                    <div>
                        <button className='sign-in'>Sign In</button>
                    </div>
                    <div style={{fontFamily: '"Krub", sans-serif', fontWeight: '400', fontSize: '18px'}}>
                        <p>OR</p>
                    </div>
                    <div className='google'>
                            <hr /><img className='google-icon' src={google} alt="" /><hr />
                    </div>
                    <div className='signup'>
                        <p>Don't have an account? <a href='/'><b>Signup here</b></a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
