import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import Services from "./component/Services";
import Login from "./component/Login";
import About from "./component/About";
import NavBar from './component/NavBar';
import Blog from './component/Blog';
import Contact from "./component/Contact";
import Student from "./component/Student";
import Staff from "./component/Staff";
import Studentdetails from "./component/StudentDetails";
import Addstudents from "./component/Addstudents";
import Update from "./component/Update";
import AdminLogin from "./component/AdminLogin";
import Admin from "./component/Admin";
import AddStaff from "./component/AddStaff";
import UpdateStaff from "./component/UpdateStaff";
import StaffDetials from "./component/StaffDetials";

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route exact path='/' element = {<Home/>}/>
          <Route exact path='/staff-details/:encodedStaffViewID' element={<StaffDetials/>}/>
          <Route exact path='/update-staff/:encodedstaffID' element={<UpdateStaff/>}/>
          <Route exact path='/admin/:ecodedAdminID/add-staff' element={<AddStaff/>}/>
          <Route exact path='/admin/:encodedAdminID' element={<Admin/>}/>
          <Route exact path='/admin' element = {<AdminLogin/>}/>
          <Route exact path='/about' element = {<About/>}/>
          <Route exact path='/login' element = {<Login/>}/>
          <Route exact path='/Services' element = {<Services/>}/>
          <Route exact path='/Blog' element={<Blog/>}/>
          <Route exact path='/Contact' element={<Contact/>}/>
          <Route exact path='/student/:encodedID' element={<Student/>}/>
          <Route exact path='/staff/:encryptedId' element={<Staff/>}/>
          <Route exact path='/student-details/:encodedViewID' element={<Studentdetails/>}/>
          <Route exact path='/staff/:encodedId/add-student' element={<Addstudents/>}/>
          <Route exact path='/update-student/:encodedstudentID' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
