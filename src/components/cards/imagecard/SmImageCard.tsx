import React from 'react';

const SmImageCard: React.FC<{ src?: string; alt?: string }> = ({
  src,
  alt,
}) => {
  return <img className='img-2 side-img' src={src} alt={alt} />;
};

SmImageCard.defaultProps = {
  src: '/images/image-about-dark.jpg',
  alt: 'room with dark furniture',
};

export default SmImageCard;
