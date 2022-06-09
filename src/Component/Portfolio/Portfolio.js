import React from 'react';
import './Portfolio.css';
import portfolio1 from '../../img/portfolio-1.png'

const Portfolio = () => {
    return (
        <div id="portfolio" className='container'>
            <div className='portfolio'>
                <div className='portfolio-1'>
                    <img src={portfolio1} alt="" />
                </div>
                <div className='portfolio-top text-center'>
                    <h6>Portfolio</h6>
                    <h3>My Amazing Works</h3>
                    <p>Most common methods for designing websites that work well on desktop is<br></br> responsive and adaptive design </p>
                </div>
                <div className='row'>

                </div>
            </div>
        </div>
    );
};

export default Portfolio;