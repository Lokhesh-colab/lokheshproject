import React from "react";
import './index.css';
import { FiArrowRight, FiCpu } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from '../Assets/02.png';
import shape from "../Assets/about-us.png";
import choose from "../Assets/choose-01.png";
import logo1 from "../Assets/icon-04.png";
import Footer from "./Footer";

function About(){
    return(
        <div className="About_main">
            <div className="about_main1a">
                <div className="About_div1">
                    <div className="About_div1a">
                        <span className="div1_h1">HOME</span>
                        <span className="div1_h1a">-</span>
                        <span className="div1_h1a">ABOUT</span>
                    </div>
                    <div className="div1_h2">About</div>
                </div>
            </div>
            <div className="auto_container">
                <div className="row">
                    <div className="col_mg">
                        <div className="about_block">
                            <img src={shape} className="shape_img"/>
                            <div className="funfact1">
                                <div className="funfact">
                                    <span className="count_span">
                                        <h1 className="count_text">2K+</h1>
                                        <p className="count_p">World Wide Client</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col_mg1">
                        <div className="col_mg1a">
                            <a className="div1h4a">ABOUT COMPANY</a>
                            <h2 className="col_mg1a">Enhancing Real-world Experiences with AR <space/>
                            <span className="col_mg1b">Technology.</span></h2>
                        </div>
                        <div>
                            <p className="col_mgP">The applications of AR are vast and diverse. From entertainment and gaming, where users can see virtual characters in their surroundings, to education, where complex subjects can be visualized and explained in an immersive way,.</p>
                        </div>
                        <Link to='/About' className="nav-button1"><FiArrowRight/>About</Link>
                    </div>
                </div>
            </div>
            <div className="About_div2">
                <div className="About_div2a">
                        <img src={choose} className="div2a_img"/>
                    <div className="About_div2a2">
                        <div className="ab_div2a">
                            <div className="ab_div2ab">
                                <div className="logo_div">
                                    <img src={logo} className="logo"/>
                                </div>
                                <div>
                                    <a className="div2h4">WHY CHOOSE US</a><br/>
                                    <a className="div2h1">We Provide Your Best Work </a>
                                </div>
                            </div>
                            <div className="ab_div2ac">
                                <FiCpu className="div2a_logo" />
                                <div className="div2a_cont">
                                    <h2 className="div2a_h2" >Expert Team:</h2>
                                    <p className="div2a_p">Our dedicated team of technology professionals comprises experienced engineers, developers, and researchers who are passionate about pushing the boundaries of technology.</p>
                                </div>
                            </div>
                            <div className="ab_div2ac">
                                <FiCpu className="div2a_logo" />
                                <div className="div2a_cont">
                                    <h2 className="div2a_h2" >Expert Team:</h2>
                                    <p className="div2a_p">Our dedicated team of technology professionals comprises experienced engineers, developers, and researchers who are passionate about pushing the boundaries of technology.</p>
                                </div>
                            </div>
                            <div className="ab_div2ac1">
                                <FiCpu className="div2a_logo" />
                                <div className="div2a_cont">
                                    <h2 className="div2a_h2" >Expert Team:</h2>
                                    <p className="div2a_p">Our dedicated team of technology professionals comprises experienced engineers, developers, and researchers who are passionate about pushing the boundaries of technology.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="About_div3">
                <img src={logo1} className="About_div3_img"/>
                <h1>We pride ourselves on our excellent support and service</h1>
            </div>
            <Footer/>
        </div>
    );
}
export default About;