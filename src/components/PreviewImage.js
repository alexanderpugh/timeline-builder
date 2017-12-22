import React from 'react';

const style = {
  height: '250px',
  width: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundColor: 'whitesmoke',
  boxShadow: '1px 2px 15px #333'
};

const PreviewImage = ({ image = '' }) => (
  <div style={{...style, backgroundImage: `url(${image})`}}></div>
);

export default PreviewImage;
