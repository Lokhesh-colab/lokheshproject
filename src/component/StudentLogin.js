import React from "react";
import { useState } from "react";
import axios from 'axios';
import CryptoJS from 'crypto-js';
import {encode as base64_encode} from 'base-64';
import './index.css';


function StudentLogin(){
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    



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
    return(
        <div>
            <div className="usr_div">
                <h1 className="usr_divh1">STUDENT LOGIN</h1>
                    <div className="usr_div1">
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
    )
}


export default StudentLogin;