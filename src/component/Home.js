import React from "react";
import './index.css';
import banner1 from '../Assets/banner-01.png';
import logo from '../Assets/02.png';
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { TfiAndroid } from "react-icons/tfi";
import shape from "../Assets/about-us.png";
import Footer from "./Footer";

function Home(){
    return(
        <div className="home_main">
            <div className="home_div1">
                <div className="home_innerdiv">
                    <a className="div1h4">BETTER FUTURE</a><br></br>
                    <a className="div1h1">Advancing with </a><br></br>
                    <a className="div1h12">Technology</a>
                    <p className="div1p1">Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for businesses.</p>
                    <Link to='/Contact' className="nav-button1 "><FiArrowRight/>CONTACT US</Link>
                </div>
                <div className="homediv1">
                    <img src={banner1} className="banner"/>
                </div>
            </div>
            <div className="homediv2">
                <div className="home_div2">
                    <div className="home_div2a">
                        <div className="logo_div">
                            <img src={logo} className="logo"/>
                        </div>
                        <div>
                            <a className="div2h4">BETTER FUTURE</a><br/>
                            <a className="div2h1">Explore Our Services </a>
                        </div>
                    </div>
                    <div className="home_div2b">
                        <div className="col-lg">
                            <div className="Service_blocks">
                                <div className="Service_blocks1">
                                    <div className="Service_icon">
                                        <div className="icon1">
                                            <div className="icon">
                                                <TfiAndroid style={{color:"white"}} />
                                            </div>
                                        </div>
                                        <div className="service_icon_two"></div>
                                        <div className="service_icon_two1"></div> 
                                    </div>
                                    <div className="Service_text">
                                        <h4 className="Service_text_h4">
                                            <a>App Development</a>
                                        </h4>
                                        <p className="Service_text_p">Providing legal advice, contract drafting, compliance assistance.</p>
                                    </div>
                                    <div style={{height:"60px"}}>
                                        <Link to='/Services'>
                                            <div className="service_icon">
                                                <FiArrowRight className="sricon"/>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className="col-lg">
                                <div className="Service_blocks">
                                    <div className="Service_blocks1">
                                        <div className="Service_icon">
                                            <div className="icon1">
                                                <div className="icon">
                                                    <TfiAndroid style={{color:"white"}} />
                                                </div>
                                            </div>
                                            <div className="service_icon_two"></div>
                                            <div className="service_icon_two1"></div> 
                                        </div>
                                        <div className="Service_text">
                                            <h4 className="Service_text_h4">
                                                <a>App Development</a>
                                            </h4>
                                            <p className="Service_text_p">Providing legal advice, contract drafting, compliance assistance.</p>
                                        </div>
                                        <div style={{height:"60px"}}>
                                            <Link to='/Services'>
                                                <div className="service_icon">
                                                    <FiArrowRight className="sricon"/>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="Service_blocks">
                                    <div className="Service_blocks1">
                                        <div className="Service_icon">
                                            <div className="icon1">
                                                <div className="icon">
                                                    <TfiAndroid style={{color:"white"}} />
                                                </div>
                                            </div>
                                            <div className="service_icon_two"></div>
                                            <div className="service_icon_two1"></div> 
                                        </div>
                                        <div className="Service_text">
                                            <h4 className="Service_text_h4">
                                                <a>App Development</a>
                                            </h4>
                                            <p className="Service_text_p">Providing legal advice, contract drafting, compliance assistance.</p>
                                        </div>
                                        <div style={{height:"60px"}}>
                                            <Link to='/Services'>
                                                <div className="service_icon">
                                                    <FiArrowRight className="sricon"/>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
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
            <Footer/>
        </div>
    );
}
export default Home;