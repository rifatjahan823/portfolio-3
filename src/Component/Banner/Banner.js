import React from 'react';
import bg from '../../img/bg.jpg'
import './Banner.css';
import avatar from '../../img/avatar.png';
import ps from '../../img/Adobe-Photoshop-2020-Logos-600x315-removebg-preview.png';
import fg from '../../img/1_c2x4lhBVMM87YA1bhuhf7g.png';
import ad from '../../img/images.png'

const Banner = () => {
    return (
        <div style={{backgroundImage:`url(${bg})`, backgroundPosition:"50%",backgroundSize:"cover",backgroundRepeat:"no-repeat",padding:'100px 0',top:"0",bottom:'0',left:'0',right:"0",marginTop:"-82px"}}>
            <div className='container' >
                <div className='row g-4 align-items-center'>
                    <div className='col-md-7 col-12 pe-5'>
                        <div className='content-part mt-5'>
                         <h3>Hello, I'm</h3>
                         <h2>Rifat Jahan</h2>
                         <p className='my-3'>A <span style={{color:'#1cbe59'}}>Creative Designer </span>From <span style={{color:"#8067f0"}}>Bangladesh</span></p>
                         <p className='p-description mb-4'>I'm creative designer based in Bangladesh, and I'm very passionate and <br></br> dedicated to my work. </p>
                         <div className='dizme_tm_button '>
                            <a href="#about"><span>About Me</span></a>
                         </div>
                        </div>
                    </div>
                    <div className='col-md-5 mt-5 col-12'>
                        <div className='img-part'>
                            <img style={{width:'320px',}} className='img-fluid mt-5  ' src={avatar} alt="" />
                            <img className='img-fluid animated-img ' src={ps} alt="" />
                            <img className='img-fluid animated-img2 ' src={fg}alt="" />
                            <img className='img-fluid animated-img3 ' src={ad} alt="" />
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Banner;