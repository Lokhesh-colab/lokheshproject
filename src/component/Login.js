import React from "react";
import { PiStudentDuotone} from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import axios from 'axios';
import CryptoJS from 'crypto-js';
import {encode as base64_encode} from 'base-64';
import { useState } from "react";
import './index.css';
import Footer from './Footer';

function Login(){
    const [showPassword, setShowPassword] = useState(false);
    const [staffusername, setStaffUsername] = useState('');
    const [staffpassword, setStaffPassword] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://35.154.211.200:8080/api/v1/studentlogin', {username,password});
            const encryptedId = encrypt(response.data.id.toString());
            const encodedID = base64_encode(encryptedId)
                window.location = `/student/${encodedID}`; 
        } catch (error) {
            console.error('Error during login:', error);
            alert('Invalid username or password');
        }
    };
    const encrypt = (text) => {
        return CryptoJS.AES.encrypt(text, 'secret_key').toString();
      };

    const handleSubmitAdmin = async (e) => {
        e.preventDefault();
        window.location = '/admin';
    }
    const handleStaffSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://35.154.211.200:8080/api/v1/stafflogin', {staffusername,staffpassword});
                const encryptedId = encrypt(response.data.id.toString());
                const encodedId = base64_encode(encryptedId);
                window.location = `/staff/${encodedId}`; 
        } catch (error) {
            console.error('Error during login:', error);
            alert('Invalid username or password');
        }
    }; 
    return(
        <div>
            <div className="stulogin">
                <div className="stud_main">
                    <div className="student">
                        <div className="student_in">
                            <div className="stud_front">
                                <div className="front_h2">Student Login</div>
                                <PiStudentDuotone className="PiStud" />
                            </div>
                            <div className="stud_back">
                                <form className="usr_form" onSubmit={handleSubmit}>
                                    <label className="in_head">Login</label><br/>
                                    <input
                                        type="text"
                                        value={username}
                                        className="usr_in"
                                        placeholder='Username'
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    /><br/>
                                    <input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        className="usr_in"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder='Password'
                                        required
                                    /><br/>
                                    <div>
                                        <input
                                            id="check"
                                            type="checkbox"
                                            value={showPassword}
                                            onChange={() =>
                                                setShowPassword((prev) => !prev)
                                            }
                                        />
                                        <label className="show_pass">Show Password</label>
                                    </div><br/>
                                    <div className="sub_div">
                                        <input type="submit" className="sub" value="Sign in"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="stud_main1">
                    <div className="student1">
                        <div className="student_in">
                            <div className="stud_front">
                                <div className="front_h2">Staff Login</div>
                                <FaChalkboardTeacher className="PiStud" />
                            </div>
                            <div className="stud_back">
                                <form className="usr_form" onSubmit={handleStaffSubmit}>
                                    <label className="in_head">Login</label><br/>
                                    <input
                                        type="text"
                                        className="usr_in"
                                        value={staffusername}
                                        placeholder='Username'
                                        onChange={(e) => setStaffUsername(e.target.value)}
                                        required
                                    /><br/>
                                    <input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        value={staffpassword}
                                        className="usr_in"
                                        placeholder='Password'
                                        onChange={(e) => setStaffPassword(e.target.value)}
                                        required
                                    /><br/>
                                    <div>
                                        <input
                                            id="check"
                                            type="checkbox"
                                            value={showPassword}
                                            onChange={() =>
                                                setShowPassword((prev) => !prev)
                                            }
                                        />
                                        <label className="show_pass">Show Password</label>
                                    </div><br/>
                                    <div className="sub_div">
                                        <input type="submit" className="sub" value="Sign in"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> 
                
            </div>
            <div className="admin_log">
                <input type="submit" className="admin_log_but" value="Admin" onClick={handleSubmitAdmin}/>
            </div>
            <Footer/>
        </div>
    );
}
export default Login;