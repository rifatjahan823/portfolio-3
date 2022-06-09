import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import BannerBottom from '../BannerBottom/BannerBottom';
import Portfolio from '../Portfolio/Portfolio';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <BannerBottom></BannerBottom>
           <About></About>
           <Portfolio></Portfolio>
        </div>
    );
};

export default Home;