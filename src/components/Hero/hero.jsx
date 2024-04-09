import React from 'react'
import "./hero.css"
import arrow_icon from "../Assets/arrow.png"
import hero_image from "../Assets/hero_image.png"
import hand_icon from "../Assets/hand_icon.png"
/* For displaying the Dashboard of the webpage */
const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <div>
                <h2>NEW ARRIVALS ONLY</h2>
                    <div className="hero-hand-icon">
                        <p>new</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>collections</p>
                    <p> for everyone</p>
                </div>
                <div className='hero-latest-btn'>
                    <div>Latest Content</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>
        </div>
    )
}

export default Hero