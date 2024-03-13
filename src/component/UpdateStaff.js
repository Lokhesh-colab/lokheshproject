import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import {decode as base64_decode} from 'base-64';
import './index.css'

function UpdateStaff(){
    const { encodedstaffID } = useParams();
    const pass = "lOkHesH"
    const [staff, setStaff] = useState({
        id: '',
        staffusername: '',
        staffpassword: '',
        mobile:'',
        role:''
    });
    const encryptedId = base64_decode(encodedstaffID);
    const secret_key ="XkhZG4fW2t2W";
    const [error,setError] = useState('');
    useEffect(() => {
        const decryptId = () => {
            try {
                const decryptedId = decrypt(encryptedId);
              return decryptedId;
            } catch (error) {
                console.error('Failed to decrypt ID:', error);
                setError('Invalid URL');
            }
          };
        const fetchUserData = async () => {
            const decryptedId = decryptId();
            try {
                const response = await axios.get(`http://35.154.211.200:8080/api/v1/staff/${decryptedId}`);
                setStaff(response.data);
              } catch (error) {
                console.error('Failed to fetch student details:', error);
                setError('Failed to fetch student details');
              }
                   
         };
        fetchUserData();
    }, [encryptedId]);
   
    const handleChange = (e) => {
        setStaff({ ...staff, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://35.154.211.200:8080/api/v1/updateStaffs/${staff.id}` , staff);
            alert('Staff data updated successfully');
            
        } catch (error) {
            console.error('Failed to update user:', error);
           
        }
    };
    
    const decrypt = (encryptedText) => {
        const bytes = CryptoJS.AES.decrypt(encryptedText, secret_key);
        return bytes.toString(CryptoJS.enc.Utf8);
      };
    return(
        <div className="add_div">
            <div className="add_div1a">
                
                    <form className="add_form" onSubmit={handleSubmit}>
                        <div className="add_in">
                            <div className="add_in1"><label className="add_label">UserName : &nbsp;</label></div>
                            <input name="staffusername" value={staff.staffusername} onChange={handleChange} className="add_input"/>
                        </div>
                        <div className="add_in">
                            <div className="add_in1"><label className="add_label">Password : &nbsp;</label></div>
                            <input name="staffpassword" value={staff.staffpassword} onChange={handleChange} className="add_input"/>
                        </div>
                        <div className="add_in">
                            <div className="add_in1"><label className="add_label">Mobile No : &nbsp;</label></div>
                            <input name="mobile" value={staff.mobile} onChange={handleChange} className="add_input" type="tel"/>
                        </div>
                        <div className="add_in">
                            <div className="add_in1"><label className="add_label">Role : &nbsp;</label></div>
                            <input name="role" value={staff.role} onChange={handleChange} className="add_input"/>
                        </div>
                        <div className="add_er">
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            <input type="submit" className="add_submit" value="Save"/>
                        </div>
                    </form>
                
            </div>
        </div>
    );

}

export default UpdateStaff;