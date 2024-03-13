import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import {decode as base64_decode} from 'base-64';
import './index.css'

function Update(){
    const { encodedstudentID } = useParams();
    const secret_key ="XkhZG4fW2t2W";
    const [student, setStudent] = useState({
        id: '',
        firstname: '',
        lastname: '',
        mobileno: '',
        regno:'',
        address: '',
        username: '',
        password: ''
    });
    const encryptedId = base64_decode(encodedstudentID);
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
            /* try {
                 const response = await axios.get(`http://35.154.211.200:8080/api/v1/student/${studentId}`);
                 setStudent(response.data);
               } catch (error) {
                 console.error('Failed to fetch student details:', error);
                 setError('Failed to fetch student details');
               }*/
             const decryptedId = decryptId();
                 if (decryptedId) {
                     try {
                       const response = await axios.get(`http://35.154.211.200:8080/api/v1/student/${decryptedId}`);
                       setStudent(response.data);
                     } catch (error) {
                       console.error('Failed to fetch student details:', error);
                       setError('Failed to fetch student details');
                     }
                   }
                   
         };
        fetchUserData();
    }, [encryptedId]);
   
    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://35.154.211.200:8080/api/v1/update/${student.id}` , student);
            alert('Student details Updated successfully');
            
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
                            <div className="add_in1"><label className="add_label">First_Name : &nbsp;</label></div>
                            <input name="firstname" value={student.firstname} onChange={handleChange} className="add_input"/>
                        </div>
                        <div className="add_in">
                            <div className="add_in1"><label className="add_label">Last_Name : &nbsp;</label></div>
                            <input name="lastname" value={student.lastname} onChange={handleChange} className="add_input"/>
                        </div>
                        <div className="add_in">
                            <div className="add_in1"><label className="add_label">Reg.No : &nbsp;</label></div>
                            <input name="regno" value={student.regno} onChange={handleChange} className="add_input"/>
                        </div>
                        <div className="add_in">
                            <div className="add_in1"><label className="add_label">Address : &nbsp;</label></div>
                            <input name="address" value={student.address} onChange={handleChange} className="add_input"/>
                        </div>
                        <div className="add_in">
                            <div className="add_in1"><label className="add_label">Mobile No : &nbsp;</label></div>
                            <input name="mobileno" value={student.mobileno} onChange={handleChange} className="add_input" type="tel"/>
                        </div>
                        <div className="add_in">
                            <div className="add_in1"><label className="add_label">UserName : &nbsp;</label></div>
                            <input name="username" value={student.username} onChange={handleChange} className="add_input"/>
                        </div>
                        <div className="add_in">
                            <div className="add_in1"><label className="add_label">Password : &nbsp;</label></div>
                            <input name="password" value={student.password} onChange={handleChange} className="add_input"/>
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

export default Update;