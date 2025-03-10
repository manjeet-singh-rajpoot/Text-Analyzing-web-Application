import React from "react";
import { Link } from "react-router-dom";
//import About from "./About";

export default function Navbar(props){
      return (
        <>
                {/* Navbar */}
        <nav className={`navbar navbar-${props.mode} bg-${props.mode}`} id="raju">
        <div div className="container">
          <Link className="navbar-brand" to="/" id="id1">{props.title}</Link>
          <Link className="navbar-brand" to="/" id="id2">{props.Home}</Link>
          <Link className="navbar-brand " to="/about" id="id3">{props.about} </Link>

    <div className="d-flex">
       <div className="bg-primary rounded mx-2" onClick={()=>{props.togelmode('primary')}} style={{height:'30px', width:'30px' , cursor:'pointer'}}></div>
       <div className="bg-danger rounded mx-2" onClick={()=>{props.togelmode('danger')}} style={{height:'30px', width:'30px' , cursor:'pointer'}}></div>
       <div className="bg-success rounded mx-2" onClick={()=>{props.togelmode('success')}} style={{height:'30px', width:'30px' , cursor:'pointer'}}></div>
       <div className="bg-warning rounded mx-2" onClick={()=>{props.togelmode('warning')}} style={{height:'30px', width:'30px' , cursor:'pointer'}}></div>

    </div>
       
   <div className={`form-check form-switch text-${props.mode==='light' ? 'dark' : 'light'}`} style={{cursor:'pointer'}}>
  <input className="form-check-input " style={{cursor:'pointer'}} type="checkbox" id="id23" onClick={()=>{props.togelmode(null)}} />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggel mode</label>
</div>
         </div>
        
       </nav> 
    </>
    
      );
}