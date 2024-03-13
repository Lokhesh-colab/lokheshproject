import React from "react";
import { useState, useEffect } from "react";
import './index.css';
import CryptoJS, { enc } from 'crypto-js';
import { useParams } from 'react-router-dom';
import {decode as base64_decode, encode as base64_encode} from 'base-64';
import axios from "axios";
import { IoMdAdd } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";


function Admin(){

    const [students, setStudents] = useState([]);
    const [staffs, setStaffs] = useState([]);
    const [error, setError] = useState('');
    const secret_key ="XkhZG4fW2t2W";
    const {encryptedId, encryptedAdminId} = useParams();
    const encodedAdminID = base64_encode(encryptedAdminId);
    const encodedId = base64_encode(encryptedId);
    const pass = "lOkHesH"

   
    useEffect(() => {
        fetchStaffDetails();
        fetchStudents();
    }, [encodedId]);
    const fetchStaffDetails = async () => {
        try {
            const response = await axios.get(`http://35.154.211.200:8080/api/v1/staffs`);
            setStaffs(response.data);
          } catch (error) {
            console.error('Failed to fetch student details:', error);
            setError('Failed to fetch student details');
          }
    };
    const fetchStudents = async () => {
        try {
            const response = await axios.get('http://35.154.211.200:8080/api/v1/students');
            setStudents(response.data);
            
        } catch (error) {
            console.error('Failed to fetch students:', error);
            setError('Failed to fetch students');
        }
    };
    const encryptId = (id) => {
        return CryptoJS.AES.encrypt(id.toString(), secret_key).toString();
    };
    const handleDelete = async (id) => {
        try {
          await axios.delete(`http://35.154.211.200:8080/api/v1/student/${id}`);
          fetchStudents();
        } catch (error) {
          console.error('Failed to delete student:', error);
        }
      };
    const handleAddStudent = async () =>{
        window.location = `/staff/${encodedId}/add-student`; 
    };
    const handleAddStaff = async () =>{
        window.location = `/admin/${encodedAdminID}/add-staff`; 
    };
    const handleUpdate = (studentId) => {
        try {
            const secureId = encryptId(studentId).toString();
            const encodestudentID = base64_encode(secureId);
            window.location = `/update-student/${encodestudentID}`; 
        } catch (error) {
            console.error('Error during update:', error);
            alert("coouldn't complete your request");
        }
    };    
    const handleView = (studentID) => {
        try{
            const securedId = encryptId(studentID).toString();
            const encodedViewID = base64_encode(securedId);
            window.location = `/student-details/${encodedViewID}`; 
        }catch{
            console.error('Error during View:',error);
            alert("coouldn't complete your request");
        }
    }
    const decrypt = (encryptedText) => {
        const bytes = CryptoJS.AES.decrypt(encryptedText, "secret_key");
        return bytes.toString(CryptoJS.enc.Utf8);
      };

      const handleDeleteStaff = async (id) => {
        try {
          await axios.delete(`http://35.154.211.200:8080/api/v1/staff/${id}`);
          fetchStaffDetails();
        } catch (error) {
          console.error('Failed to delete student:', error);
        }
      };
      const handleViewStaff = (staffID) => {
        try{
            const securedViewId = encryptId(staffID).toString();
            const encodedStaffViewID = base64_encode(securedViewId);
            window.location = `/staff-details/${encodedStaffViewID}`; 
        }catch{
            console.error('Error during View:',error);
            alert("coouldn't complete your request");
        }
    };
    const encrypt = (id) => {
        return CryptoJS.AES.encrypt(id.toString(), pass).toString();
    };
    const handleUpdateStaff = (staffId) => {
        try {
            const secureStaffId = encryptId(staffId).toString();
            const encodedstaffID = base64_encode(secureStaffId);
            window.location = `/update-staff/${encodedstaffID}`; 
           
        } catch (error) {
            console.error('Error during update:', error);
            alert("coouldn't complete your request");
        }
        
    };  
    const handleLogout = () => {
        localStorage.clear();
        window.location = '/admin';
    }  
    return(
        <div className="stud_div">
            <div>
                <div className="admin_div">
                    <div className="admin_but1">
                        <button className="add_stud" onClick={handleAddStaff}>Add Staff <IoMdAdd className="Iomod" /></button>
                    </div>
                    <div className="admin_but2">
                        <button className="add_stud" onClick={handleAddStudent}>Add Student <IoMdAdd className="Iomod" /></button>
                    </div>
                    <div className="admin_but2">
                        <button className="add_stud" onClick={handleLogout}>LogOut <RiLogoutCircleLine className="Iomod" /></button>
                    </div>
                </div>
                <h2 className="stud_data">TEACHERS DATA</h2>
                {error && <div className="error">{error}</div>}
                <table className="stud_table">
                    <thead>
                        <tr>
                            <th className="stud_th">USERNAME</th>
                            <th className="stud_th">MOBILE NO</th>
                            <th className="stud_th">ROLE</th>
                            <th className="stud_th1a">ACTION</th>
                        </tr>
                    </thead>
                    <tbody className="stud_tbody">
                    {staffs.map(staff => (
                        <tr key={staff.id}>
                            <td className="stud_td">{staff.staffusername}</td>
                            <td className="stud_td">{staff.mobile}</td>
                            <td className="stud_td">{staff.role}</td>
                            <td className="stud_td1ba">
                                <button className="staff_but" onClick={()=>handleUpdateStaff(staff.id)}>Update</button>
                                <button className="staff_but" onClick={()=>handleDeleteStaff(staff.id)}>Delete</button>
                                <button className="staff_but" onClick={()=>handleViewStaff(staff.id)}> View</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div>
                    <table className="stud_table1">
                        <thead>
                            <tr>
                                <th className="stud_th">STAFF</th>
                                <th className="stud_th1a">ACTION</th>
                            </tr>
                        </thead>
                        <tbody className="stud_tbody">
                        {staffs.map(staff => (
                            <tr key={staff.id}>
                                <td className="stud_td">{staff.staffusername}</td>
                                <td className="stud_td1b">
                                    <button onClick={()=>handleUpdateStaff(staff.id)}>Update</button>
                                    <button onClick={()=>handleDeleteStaff(staff.id)}>Delete</button>
                                    <button onClick={()=>handleViewStaff(staff.id)}> View</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <h2 className="stud_data">STUDENTS DATA</h2>
                {error && <div className="error">{error}</div>}
                <table className="stud_table">
                    <thead>
                        <tr>
                            <th className="stud_th">REG NO</th>
                            <th className="stud_th">FIRST NAME</th>
                            <th className="stud_th">LAST NAME</th>
                            <th className="stud_th">ADDRESS</th>
                            <th className="stud_th">USERNAME</th>
                            <th className="stud_th">MOBILE NO</th>
                            <th className="stud_th1">ACTION</th>
                        </tr>
                    </thead>
                    <tbody className="stud_tbody">
                    {students.map(student => (
                        <tr key={student.id}>
                            <td className="stud_td">{student.regno}</td>
                            <td className="stud_td">{student.firstname}</td>
                            <td className="stud_td">{student.lastname}</td>
                            <td className="stud_td">{student.address}</td>
                            <td className="stud_td">{student.username}</td>
                            <td className="stud_td">{student.mobileno}</td>                            
                            <td className="stud_td1b">
                                <button onClick={()=>handleUpdate(student.id)}>Update</button>
                                <button onClick={()=>handleDelete(student.id)}>Delete</button>
                                <button onClick={()=>handleView(student.id)}> View</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div>
                    <table className="stud_table1">
                        <thead>
                            <tr>
                                <th className="stud_th">STUDENT</th>
                                <th className="stud_th1a">ACTION</th>
                            </tr>
                        </thead>
                        <tbody className="stud_tbody">
                        {students.map(student => (
                            <tr key={student.id}>
                                <td className="stud_td">{student.username}</td>
                                <td className="stud_td1b">
                                    <button onClick={()=>handleUpdate(student.id)}>Update</button>
                                    <button onClick={()=>handleDelete(student.id)}>Delete</button>
                                    <button onClick={()=>handleView(student.id)}> View</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Admin;