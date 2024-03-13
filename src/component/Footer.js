import React, { startTransition, useState } from 'react';
import logo1 from '../Assets/logo.png';
import "./Footer.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Contact from "./Contact";
import { useNavigate } from 'react-router-dom';
import gallery from '../Assets/about-us.png';

function footer(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email, setEmail] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(email.trim()==''){
            navigate('./About.js');
            return;
        }
    }
    
    return(
        <div className="Foot_main">
            <div className='Foot_main1'>
                <div className="Foot_div1">
                    <Link to='/' className="logo1"><img src={logo1} alt="logo"/></Link>
                    <p>Our technologies are designed to seamlessly integrate with your existing systems, minimizing disruption and maximizing productivity.</p>
                    <Link to='/About' className="Foot-button1"><FiArrowRight/>About</Link>
                </div>
                <div className="Foot_div2">
                    <h4 className="Foot_h4">Newletter</h4>
                    <p className="Foot_p">Integrate with your existing systems, minimizing disruption and maximizing productivity.</p>
                    <form onSubmit={handleSubmit} className='foot_forms'>
                        <input className='foot_input' type="email" name="email" placeholder="Your mail address *" onChangeText={(email) => setEmail(email)}></input>
                        <button className='foot_submit' type='submit'><FiArrowRight/>Go</button>
                    </form>
                </div>
            </div>
            <div className='Foot_main2'>
                <div className="Foot_div2">
                    <h4 className="Foot_h4">Official info</h4>
                    <p className='Foot_p'>Flat 20, Reynolds Neck, North Helenaville, FV77 8WS</p>
                    <div className='foot_info'>
                        <a href='tell:9597167611' className='basicinfo'>+91 9597167611</a>
                        <a href='mailto:lokhesh1205@gmail.com' className='basicinfo'>lokhesh1205@gmail.com</a>
                    </div>
                </div>
                <div className='Foot_div2'>
                    <h4 className="Foot_h4">Gallery</h4>
                    <img src={gallery} className='foot_img'/>
                </div>
            </div>
        </div>
    )
}
export default footer;