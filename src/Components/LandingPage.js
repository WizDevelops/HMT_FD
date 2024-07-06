import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/LandingPage.css'
import headerImg from '../img/landHeader.png'
import LadingPageCard from './LadingPageCard'
import Card1 from '../img/card-img1.webp'
import Card2 from '../img/card-img2.jpg'
import Card3 from '../img/card-img3.jpg'
import coloredImg from '../img/colored-section.png'

export default function LandingPage() {
    const imgData = [
        {
          imageSrc: Card1,
          title: 'Request Consultations',
          description: 'Connect with experienced doctors from the comfort of your home. Book appointments instantly and receive expert advice.',
        },
        {
          imageSrc: Card2,
          title: 'Make Appointments',
          description: 'Book appointments hassle-free and receive expert advice.',
        },
        {
          imageSrc: Card3,
          title: 'Keep Records of your health matrics',
          description: 'Keep a record of your vital signs, lab results, and medications.',
        },
      ];
  return (
    <div>
        <div className="header">
            <div className='header-color'>
                <svg width="100%" viewBox="0 0 1507 701" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_1_3)">
                    <path d="M-3.00006 -1.39513L1508 -1.395346C1508 -1.395346 1661.51 391.66849 1508 554.235C1316.1 761.53685 1097 554.88 763.5 480.555C430 406.23 319.5 469.65 223.5 490.44C127.5 511.23 85.4538 528.88887 -2.99999 554.235L-3.00006 -1.39513Z" fill="url(#paint0_linear_1_3)"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_1_3" x="-7.00006" y="-1.50038" width="1587.23" height="702.032" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_3"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_3" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_1_3" x1="320.834" y1="-254.507" x2="1188.21" y2="855.678" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#294EAD"/>
                    <stop offset="1" stopColor="#112047"/>
                    </linearGradient>
                    </defs>
                </svg>
                <img className="header-img" src={headerImg} alt="" style={{width: '650px'}}/>
            </div>
        
            <div className='header-body'>
                <div className='header-link'>
                    <Link className='hLink' to="/patientLogin"  style={{borderRight: '2px solid white', paddingRight: '40px'}}>Patient's Login</Link>
                    <Link className='hLink' to="/doctorLogin">Doctor's Login</Link>
                </div>
                <div className='header-text'>
                    <h1 style={{color: '#F8BD00'}}>Health Management</h1>
                    <h1 style={{color: 'white'}}>Tool</h1>
                    <p>Health management tools (HMTs) encompass a wide range of digital applications and software designed to empower individuals and healthcare providers to manage health and well-being.</p>
                </div>
                
            </div>
        </div>
        <div className='steps'>
            <div className='steps-title'>
                <p style={{color: '#122278'}}>Get Your Solutions</p>
                <p style={{color: '#F8BD00'}}>in Easy Steps</p>
            </div>
            <hr />
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {imgData.map((card, index) => (
                    <LadingPageCard
                    key={index}
                    imageSrc={card.imageSrc}
                    title={card.title}
                    description={card.description}
                    />
                ))}
            </div>
        </div>
        <div className='colored-section'>
            <div className='colored-img'>
                <img src={coloredImg} alt="" />
            </div>
            <div className='colored-text'>
                <p>Certainly! Our healthcare platform seamlessly integrates essential features to enhance patient care and streamline healthcare processes. </p>
                <p>Patients can conveniently book appointments with their preferred healthcare providers, whether for in-person visits or virtual consultations. </p>
                <p>Additionally, our platform ensures easy access to comprehensive health records, allowing patients to view lab results, medication history, and vital signs. During consultations, healthcare providers have instant access to patient data, enabling informed decisions and personalized care.</p>
            </div>
        </div>
        <div className='footer'>
            <div className='copyright'>                
                <p><i className="fa fa-regular fa-copyright"></i>2024 Health Care Solutions</p>
                <p>All Rights Reserved | Privacy Policy  |</p>
                <p>Terms of Service</p>
            </div>
            <div className='contact'>
                <p>Contact Us:</p>
                <p><i className="fa fa-solid fa-phone"></i> Phone: +1 (555) 123-4567</p>
                <p><i className="fa fa-solid fa-envelope"></i> Email: info@healthcaresolutions.com</p>
            </div>
            <div className='follow'>
                <p>Follow us on:</p>
                <p><i className="fa fa-brands fa-facebook"></i> Facebook</p>
                <p><i className="fa fa-brands fa-twitter"></i> Twitter</p>
                <p><i className="fa fa-brands fa-linkedin"></i> LinkedIn</p>
            </div>
        </div>
    </div>
  )
}
