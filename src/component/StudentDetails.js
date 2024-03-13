import React from "react";
import { useState, useEffect } from "react";
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import {decode as base64_decode} from 'base-64';
import './index.css'


function Studentdetails(){
    const { encodedViewID } = useParams();
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
    const [error, setError] = useState('');
    const encryptedId = base64_decode(encodedViewID);

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
        const fetchStudent = async () => {
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
        fetchStudent();
    }, [encryptedId]);
    console.log('Student:', student);
    console.log('Error:', error);
    const decrypt = (encryptedText) => {
        const bytes = CryptoJS.AES.decrypt(encryptedText, secret_key);
        return bytes.toString(CryptoJS.enc.Utf8);
      };

    return (
        <div className="add_div">
            <div className="add_div1a">
                
                    <form className="add_form">
                        <div className="add_in">
                            <div className="add_in1"><label className="add_label">First_Name : &nbsp;</label></div>
                            <input name="firstname" value={student.firstname} className="add_input" readOnly/>
                        </div>
                        <div className="add_in">
                            <div className="add_in1"><label className="add_label">Last_Name : &nbsp;</label></div>
                            <input name="lastname" value={student.lastname} className="add_input" readOnly/>
                        </div>
                        <div className="add_in">
                            <div className="add_in1"><label className="add_label">Reg.No : &nbsp;</label></div>
                            <input name="regno" value={student.regno} className="add_input" readOnly/>
                        </div>
                        <div className="add_in">
                            <div className="add_in1"><label className="add_label">Address : &nbsp;</label></div>
                            <input name="address" value={student.address} className="add_input" readOnly/>
                        </div>
                        <div className="add_in">
                            <div className="add_in1"><label className="add_label">Mobile No : &nbsp;</label></div>
                            <input name="mobileno" value={student.mobileno} className="add_input" readOnly/>
                        </div>
                        <div className="add_in">
                            <div className="add_in1"><label className="add_label">UserName : &nbsp;</label></div>
                            <input name="username" value={student.username} className="add_input" readOnly />
                        </div>
                        <div className="add_in">
                            <div className="add_in1"><label className="add_label">Password : &nbsp;</label></div>
                            <input name="password" value={student.password} className="add_input" readOnly/>
                        </div>
                    </form>
                
            </div>
        </div>
    );
}
export default Studentdetails;