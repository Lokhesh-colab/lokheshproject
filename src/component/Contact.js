import React from "react";
import contact from '../Assets/contact.jpg';
import { FiPhoneCall ,FiMail} from "react-icons/fi";
import './index.css';
import Footer from './Footer';
import logo from '../Assets/02.png';
import { useRef } from "react";
import emailjs from '@emailjs/browser';

function Contact(){
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_j23a0f4', 'template_o0dn2mj', form.current, {
            publicKey: 'TAxZ2SevisZch3ser',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              alert("Message sent successfull")
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return(
        <div className="contact">
            <div className="about_main1a">
                <div className="About_div1">
                    <div className="About_div1a">
                        <span className="div1_h1">HOME</span>
                        <span className="div1_h1a">-</span>
                        <span className="div1_h1a">CONTACT</span>
                    </div>
                    <div className="div1_h2">Contact</div>
                </div>
            </div>
            <div className="conta_div">
                <div className="contact_div">
                    <div className="img_cont">
                        <div>
                            <img src={contact} alt="contact" className="contact_img" />
                        </div>
                        <div className="cont_info">Contact Information</div>
                        <div>
                        <div className="cont_div">
                            <div className="fi_div">
                                <FiPhoneCall className="Fiphone"/>
                            </div>
                            <div className="ph_div">
                                <div className="ph_no">+91 9597167611</div>
                                <div className="ph_no">+91 9597167611</div>
                            </div>
                        </div>
                        <div className="cont_div">
                            <div className="fi_div1">
                                <FiMail className="Fimail"/>
                            </div>
                            <div className="ph_div">
                                <div className="ph_no">lokhesh1205@gmail.com</div>
                                <div className="ph_no">harilokhesh2002@gmail.com</div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="contact_div1">
                        <div className="home_div2a1">
                            <div className="logo_div">
                                <img src={logo} className="logo" alt="logo"/>
                            </div>
                            <div>
                                <div className="div2h4">CONTACT US</div>
                                <div className="div2h1">Get a Free Quote</div>
                            </div>
                        </div>
                        <div className="div_cont">
                            <form className="cont_form" ref={form} onSubmit={sendEmail}>
                                <div className="in_div">
                                    <input type="text" placeholder="YOUR NAME *" className="cont_in" name="user_name"/>
                                    <input type="text" placeholder="YOUR EMAIL *" className="cont_in1" name="user_email"/>
                                </div>
                                <div className="in_div">
                                    <input type="text" placeholder="YOUR SUBJECT" className="cont_in" name="user_subject"/>
                                    <input type="text" placeholder="YOUR PHONE" className="cont_in1" name="user_mobile"/>
                                </div>
                                <div className="in_div">
                                    <textarea placeholder="Message" className="textarea" name="message"></textarea>
                                </div>
                                <div className="cont_but">
                                    <button className="cont_button">Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Contact;