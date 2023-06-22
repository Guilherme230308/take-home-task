import React from 'react';
import './Banner.css';

const Banner: React.FC = () => {
  return (
    <header className="banner">
      <img src="/images/banner_desktop.png" alt="Fixed Banner" className="banner-desktop d-none d-md-block" />
      <img src="/images/banner_mobile.png" alt="Fixed Banner" className="banner-mobile d-block d-md-none" />
    </header>
  );
}

export default Banner; 