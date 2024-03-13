import React,{useState} from "react";
import { Link } from "react-router-dom";
import logo from '../Assets/logo.png'
import { FiAlignJustify,FiX ,FiArrowRight} from "react-icons/fi";
import './Nav_bar.css';

function Services(){
    const[open,setOpen] = useState(false);
    const handeClick = () => setOpen(!open);
    const closeMenu = () => setOpen(false);
    return(
        <div className="NavBar">
            <nav className="navbar">
                <Link to='/' className="logo"><img src={logo} alt="logo"/></Link>
                <div className="navicon" onClick={handeClick}>
                    {open?<FiX className="NavClose"/>:
                    <FiAlignJustify className="NavMenu"/>}
                </div>
                <div className="nav-menu">
                    <ul className={open? 'Nav-bar active' : 'Nav-bar'}>
                        <li onClick={closeMenu} className="nav-item"><Link to='/' className="nav-link">Home</Link></li>
                        <li onClick={closeMenu} className="nav-item"><Link to='/About' className="nav-link">About</Link></li>
                        <li onClick={closeMenu} className="nav-item"><Link to='/Services' className="nav-link">Services</Link></li>
                        <li onClick={closeMenu} className="nav-item"><Link to='/contact' className="nav-link">Contact Us</Link></li>
                        <li onClick={closeMenu} className="nav-item"><Link to='/login' className="nav-link">Login</Link></li>
                        <Link to='/Contact' className="nav-button "><FiArrowRight/>DISCUSES</Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Services;

