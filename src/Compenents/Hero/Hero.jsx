import React from "react"
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
    return (
        <div className="hero">
            <img src={profile_img} alt=""></img>
            <h1><span>I'am Ali Manhal, </span> FullStack Developer based in India</h1>
            <p>This is just description it will change</p>
            <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My resume</div>
            </div>

        </div>
    )
}

export default Hero