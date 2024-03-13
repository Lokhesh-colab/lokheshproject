import React, { useState } from "react";
import { useParams,useLocation } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { useEffect } from "react";
import axios from "axios";

function Addstudents(){
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [regno , setRegno] = useState('');
    const [address ,setAddress] = useState('');
    const [mobileno, setMobileno] = useState('');
    const [username,setUsername] =useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [error,setError] = useState('');
    

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    
      const handleRetypePasswordChange = (event) => {
        setRetypePassword(event.target.value);
      };
    const handleSave = async (event) =>{
        event.preventDefault();
        if (password !== retypePassword) {
            setError('Passwords do not match');
          } else {
            setError('');
            try {
                await axios.post('http://35.154.211.200:8080/api/v1/students', { firstname ,lastname,regno,address,mobileno,username,password});
                alert('Student data saved successfully')
              } catch (error) {
                console.error('Failed to submit student details:', error);
              }
        }
    }
    return(
        <div className="add_div">
            <div className="add_div1a">
                
                    <form className="add_form" onSubmit={handleSave}>
                        <div className="add_in">
                            <div className="add_in1"><label className="add_label">First_Name : &nbsp;</label></div>
                            <input value={firstname} onChange={(e) => setFirstname(e.target.value)} className="add_input"/>
                        </div>
                        <div className="add_in">
                            <div className="add_in1"><label className="add_label">Last_Name : &nbsp;</label></div>
                            <input value={lastname} onChange={(e) => setLastname(e.target.value)} className="add_input"/>
                        </div>
                        <div className="add_in">
                            <div className="add_in1"><label className="add_label">Reg.No : &nbsp;</label></div>
                            <input value={regno} onChange={(e) => setRegno(e.target.value)} className="add_input"/>
                        </div>
                        <div className="add_in">
                            <div className="add_in1"><label className="add_label">Address : &nbsp;</label></div>
                            <input value={address} onChange={(e) => setAddress(e.target.value)} className="add_input"/>
                        </div>
                        <div className="add_in">
                            <div className="add_in1"><label className="add_label">Mobile No : &nbsp;</label></div>
                            <input value={mobileno} onChange={(e) => setMobileno(e.target.value)} className="add_input"/>
                        </div>
                        <div className="add_in">
                            <div className="add_in1"><label className="add_label">UserName : &nbsp;</label></div>
                            <input value={username} onChange={(e) => setUsername(e.target.value)} className="add_input"/>
                        </div>
                        <div className="add_in">
                            <div className="add_in1"><label className="add_label">Password : &nbsp;</label></div>
                            <input value={password} onChange={handlePasswordChange} className="add_input"/>
                        </div>
                        <div className="add_in">
                            <div className="add_in1"><label className="add_label">Re-Type Password : &nbsp;</label></div>
                            <input value={retypePassword} onChange={handleRetypePasswordChange} className="add_input"/>
                        </div>
                        <div className="add_er">
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            <input type="submit" className="add_submit" value="Save"/>
                        </div>
                    </form>
                
            </div>
        </div>
    )
}
export default Addstudents;