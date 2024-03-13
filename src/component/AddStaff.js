import React, { useState } from "react";
import { useParams,useLocation } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { useEffect } from "react";
import axios from "axios";

function AddStaff(){
    const [mobile, setMobile] = useState('');
    const [role, setRole] = useState('');
    const [staffusername,setStaffUsername] =useState('');
    const [staffpassword, setStaffPassword] = useState('');
    const [retypestaffPassword, setRetypestaffPassword] = useState('');
    const [error,setError] = useState('');

    const handlePasswordChange = (event) => {
        setStaffPassword(event.target.value);
      };
    
      const handleRetypePasswordChange = (event) => {
        setRetypestaffPassword(event.target.value);
      };
    const handleSave = async (event) =>{
        event.preventDefault();
        if (staffpassword !== retypestaffPassword) {
            setError('Passwords do not match');
          } else {
            setError('');
            try {
                await axios.post('http://35.154.211.200:8080/api/v1/staff', { role,mobile,staffusername,staffpassword});
                alert("Staff details saved successfull")
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
                            <div className="add_in1"><label className="add_label">UserName : &nbsp;</label></div>
                            <input value={staffusername} onChange={(e) => setStaffUsername(e.target.value)} className="add_input"/>
                        </div>
                        <div className="add_in">
                            <div className="add_in1"><label className="add_label">Password : &nbsp;</label></div>
                            <input value={staffpassword} onChange={handlePasswordChange} className="add_input"/>
                        </div>
                        <div className="add_in">
                            <div className="add_in1"><label className="add_label">Re-Type Password : &nbsp;</label></div>
                            <input value={retypestaffPassword} onChange={handleRetypePasswordChange} className="add_input"/>
                        </div>
                        <div className="add_in">
                            <div className="add_in1"><label className="add_label">Role &nbsp;</label></div>
                            <input value={role} onChange={(e) => setRole(e.target.value)} className="add_input"/>
                        </div>
                        <div className="add_in">
                            <div className="add_in1"><label className="add_label">Mobile No : &nbsp;</label></div>
                            <input value={mobile} onChange={(e) => setMobile(e.target.value)} className="add_input"/>
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
export default AddStaff;