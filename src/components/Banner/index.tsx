import React from 'react';
import './Banner.css';

const Banner: React.FC = () => {
    return (
        <header className='banner'>
            <img src="/images/banner.png" alt="Banner fixo da aplicação" />
        </header>
    );
}

export default Banner;