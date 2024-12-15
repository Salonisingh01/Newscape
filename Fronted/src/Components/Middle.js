import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';


export default function Middle() {
  return (
    <>
    <div className="exclusive">
    <div className="box1"></div>
    <div className="box2">
        <h1> Get all latest News ! </h1>
        <h4>just in one Click</h4>
        <p style={{marginTop:'10px'}}>only on Newscape..</p>
        <button type="button" className="btn btn-success"><Link className='nav-link' to='/'>Read More..</Link></button>

    </div>
    </div>
    
    
    </>
  )
}
