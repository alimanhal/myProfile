import React from "react"
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
    return (
        <div className="hero">
            <img src={profile_img} alt=""></img>
            <h1>I'am Manhal from India</h1>

        </div>
    )
}

export default Hero