import React from 'react';
import img from '../../img/1.jpg';
import color1 from '../../img/color-1.png';
import color2 from '../../img/color-2.png';
import './About.css'

const About = () => {
    return (
        <div className='container'>
        <div className='about'>
            <div className='row g-4 align-items-center'>
                <div className='col-md-6 col-12'>
                    <div className='about-img'>
                        <img className='img-fuild' src={img} alt="" />
                        <div className='color-1'>
                        <img  src={color1} alt="" />
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-12 ps-5'>
                    <div className='about-content'>
                        <h6>I'm a Designer</h6>
                        <h3>I Can Design Anything You Want</h3>
                        <p>Hello there! I'm a web designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration. </p>
                        <div className='dizme_tm_button '>
                            <a href="#about"><span>About Me</span></a>
                         </div>
                        <div className='color-2'>
                        <img src={color2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;