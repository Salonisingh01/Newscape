import React, { Component } from 'react'

export class Footer extends Component {
    render() {
      return (
        <>
        <hr></hr>
        <div className="bottom" style={{display:'flex' , justifyContent:'space-around'}}>
           <h2>Newscape</h2>
           <div className="about" style={{display:'flex' , justifyContent:'space-around'}}>
              <div className="boxes" style={{  height:'200px' ,width :' 200px',fontSize:'20px'}}>About Us 
                  <div className="boxes" style={{}}>Work </div>
                  <div className="boxes" style={{}}>Experiences </div>
             </div>
             <div className="boxes" style={{height:'200px' ,width :' 200px',fontSize:'20px'}}>Contact Us  
                  <div className="boxes" style={{}}>Email </div>
                  <div className="boxes" style={{}}>Facebook  </div>
             </div>
           
           </div>
        </div>
            <div className="card text-center">
                <div className="card-footer text-body-secondary">
                  2 days ago
                </div>
            </div>
        <h3 style={{marginLeft:'500px'}}> Copyright 2024. All rights reserved to @Team- CARE_TECH</h3> 
        
        </>
      )
}}

export default Footer;
