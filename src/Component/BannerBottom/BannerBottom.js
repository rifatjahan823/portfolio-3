import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye,faBrush,faLightbulb} from '@fortawesome/free-solid-svg-icons';
import img1 from '../../img/1.png';
import img2 from '../../img/2.png';
import img3 from '../../img/3.png';
import './BannerBottom.css'

const BannerBottom = () => {
    return (
        <div className='container'>
          <div className=''style={{padding:"145px 0"}}> 
            <div className='row g-4 justify-content-center'>
                <div className='col-lg-4 col-md-6 col-12 text-center'>
                    <div className='part'>
                        <div className='part-img'>
                            <img src={img1} alt="" />
                            <FontAwesomeIcon className='part-icon' icon={faBullseye} />
                        </div>
                        <h3>Pixel Perfect</h3>
                        <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design. </p>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-12 text-center'>
                     <div className='part'>
                        <div className='part-img'>
                           <img src={img2} alt="" />
                           <FontAwesomeIcon className='part-icon' icon={faBrush} />
                        </div>
                        <h3>High Quality</h3>
                        <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design. </p>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-12 text-center'>
                     <div className='part'>
                         <div className='part-img'>
                            <img src={img3} alt="" />
                            <FontAwesomeIcon className='part-icon' icon={faLightbulb} />
                         </div>   
                         <h3>Awesome Idea</h3>
                         <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design </p>
                     </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default BannerBottom;