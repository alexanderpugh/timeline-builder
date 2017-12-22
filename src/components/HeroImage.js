import React from 'react';

const style = {
  width: '100%',
  height: '250px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundColor: 'whitesmoke'
};

const HeroImage = ({ imageSrc = '' }) => (
  <div style={{ ...style, backgroundImage: `url(${imageSrc})` }}></div>
);

export default HeroImage;
