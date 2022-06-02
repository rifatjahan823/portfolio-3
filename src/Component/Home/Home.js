import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import BannerBottom from '../BannerBottom/BannerBottom';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <BannerBottom></BannerBottom>
           <About></About>
        </div>
    );
};

export default Home;