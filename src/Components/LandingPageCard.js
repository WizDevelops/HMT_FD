import React from 'react';
import '../Style/LandingPageCard.css';



const LandingPageCard = ({ imageSrc, title, description }) => {
  return (
    <div className="landing-page-card">
      <div className="card-image-wrapper">
        <img src={imageSrc} alt={title} className="card-image" />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default LandingPageCard;


