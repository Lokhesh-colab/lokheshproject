import React from "react";
import { useState } from "react";
import axios from 'axios';
import CryptoJS from 'crypto-js';
import {encode as base64_encode} from 'base-64';


function AdminLogin(){
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleStaffSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://35.154.211.200:8080/api/v1/adminlogin', {username,password});
                const encryptedAdminId = encrypt(response.data.id.toString());
                const encodedAdminId = base64_encode(encryptedAdminId);
                window.location = `/admin/${encodedAdminId}`; 
        } catch (error) {
            console.error('Error during login:', error);
            alert('Invalid username or password');
        }
    };
    const encrypt = (text) => {
        return CryptoJS.AES.encrypt(text, "secret_key").toString();
      };    
    return(
        <div>
            <div className="staff_div">
                    <h1 className="usr_divh1">ADMIN LOGIN</h1>
                    <div className="staff_login">
                        <form className="usr_form" onSubmit={handleStaffSubmit}>
                            <label className="in_head">Login</label><br/>
                            <input
                                type="text"
                                className="usr_in"
                                value={username}
                                placeholder='Username'
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            /><br/>
                            <input
                                type={
                                    showPassword ? "text" : "password"
                                }
                                value={password}
                                className="usr_in"
                                placeholder='Password'
                                onChange={(e) => setPassword(e.target.value)}
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
export default AdminLogin;