import React from 'react';

interface BannerProps {
  title: string;
}

const Banner: React.FC<BannerProps> = ({ title }) => {
  return (
    <div className="banner">
      <p>{title}</p>
    </div>
  );
}

export default Banner;
