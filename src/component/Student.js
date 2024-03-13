import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {decode as base64_decode} from 'base-64';
import CryptoJS from 'crypto-js';
import './index.css';
import { RiLogoutCircleLine } from "react-icons/ri";

function Student(){
    const { encodedID } = useParams();
    const [student, setStudent] = useState(null);
    const [error, setError] = useState('');
    const encryptedId = base64_decode(encodedID);

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
        const fetchStudentDetails = async () => {
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

        fetchStudentDetails();
    }, [encryptedId]);
    const decrypt = (encryptedText) => {
        const bytes = CryptoJS.AES.decrypt(encryptedText, 'secret_key');
        return bytes.toString(CryptoJS.enc.Utf8);
      };
    const handleLogout = () => {
        window.location='/login';
    }
    return(
        <div className="stud_div">
            <div className="admin_div">
                    <div className="admin_but4">
                        <button className="add_stud" onClick={handleLogout}>LogOut <RiLogoutCircleLine className="Iomod" /></button>
                    </div>
            </div>
                    
            {student &&(
                <div>
                    <table className="stud_table">
                        <thead>
                            <tr className="stud_tr">
                                <th className="stud_th">Reg.No</th>
                                <th className="stud_th">First_Name</th>
                                <th className="stud_th">Last_Name</th>
                                <th className="stud_th">Address</th>
                                <th className="stud_th">Mobil No</th>
                                <th className="stud_th1">Username</th>
                            </tr>
                        </thead>
                        <tbody className="stud_tbody">
                                <tr>
                                    <td className="stud_td">{student.regno}</td>
                                    <td className="stud_td">{student.firstname}</td>
                                    <td className="stud_td">{student.lastname}</td>
                                    <td className="stud_td">{student.address}</td>
                                    <td className="stud_td">{student.mobileno}</td>
                                    <td className="stud_td1">{student.username}</td>
                                </tr>
                        </tbody>
                    </table>
                    <div className="stud_dediv">
                        <div className="stud_dediv1">
                            <a className="stud_h3">Reg.No</a>
                            <a className="stud_h4">{student.regno}</a>
                            <a className="stud_h3">FirstName</a>
                            <a className="stud_h4">{student.firstname}</a>
                            <a className="stud_h3">LastName</a>
                            <a className="stud_h4">{student.lastname}</a>
                            <a className="stud_h3">Address</a>
                            <a className="stud_h4">{student.address}</a>
                            <a className="stud_h3">Mobile No</a>
                            <a className="stud_h4">{student.mobileno}</a>
                            <a className="stud_h3">Username</a>
                            <a className="stud_h4">{student.username}</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Student;