import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export class Navbar extends Component {
  render() {
    return (
        <>
            <div>
                 <nav className="navbar fixed-top navbar-expand-lg " style={{ backgroundColor: '#133E87',color:'#FFFFFF' }}>
                    <div className="container-fluid">
                        <h1 className="navbar-brand" style={{color:'#FFFFFF',fontFamily:'Monotype Old English Text Std',marginbottom:'20px' ,fontSize:'35px'}}>Newscape</h1>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" aria-current="page"  to="/" style={{color:'#FFFFFF'}}>Home</Link>
                            <Link className="nav-link"  to="/business" style={{color:'#FFFFFF'}}>Business</Link>
                            <Link className="nav-link"  to="/entertainment" style={{color:'#FFFFFF'}}>Entertainment</Link>
                            <Link className="nav-link"  to="/health" style={{color:'#FFFFFF'}}>Health</Link>
                            <Link className="nav-link"  to="/sports" style={{color:'#FFFFFF'}}>Sports</Link>
                            <Link className="nav-link"  to="/technology" style={{color:'#FFFFFF'}}>Technology</Link>
                            <Link className="nav-link"  to="/science" style={{color:'#FFFFFF'}}>Science</Link>
                         </div>
                      </div>
                   
                   <button type="button" id='mine' className="btn btn-danger">Subscribe</button>
                   <button type="button" className=" btnOne "><Link className='nav-link' to="/login">Login</Link></button>
                    </div>
                 </nav>
               
          </div>
       </>
    )
  }
}

export default Navbar;