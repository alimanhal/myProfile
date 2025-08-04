import React from "react"
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'


const About = () => {
    return (
        <div className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS <hr style={{ width: "50%" }} /></p>
                            <p>JavaScript<hr style={{ width: "70%" }} /></p>
                            <p>React JS  <hr style={{ width: "60%" }} /></p>
                            <p>Flutter <hr style={{ width: "50%" }} /></p>
                        </div>
                        <div className="about-achievements">
                            <div className="about-achievement">
                                <h1>1+</h1>
                                <p>YEARS OF EXPERIENCE</p>
                            </div>
                            <hr />
                            <div className="about-achievement">
                                <h1>5+</h1>
                                <p>PROJECTS COMPLETED</p>
                            </div>
                            <hr />
                            <div className="about-achievement">
                                <h1>5+</h1>
                                <p>PROJECTS COMPLETED</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About