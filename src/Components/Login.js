import React from 'react'
import { Link } from 'react-router-dom';
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom';


import '../App.css'

const Login = () => {

//     const navigate =  useNavigate();

//     const [input,setInput] = useState({
//         email:"",
//         password:"",
//     });
//    const handleLogin = async (e) => {
//     e.preventDefault();
//     const loggedUser = await JSON.parse(localStorage.getItem("user"));
//     if(input.email === loggedUser.email && input.password ===  loggedUser.password){
//      navigate("/");
//     }
//     else{
//         alert("Wrong Email or Password !")
//     }

//    };
    return (
    <div className="mainbody">
        <div className="details">
            <h2 style={{color:'white'}}>Login</h2>
          <form>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label" style={{color:'white'}}>Email address</label>
                <input  type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>

                <label htmlFor="exampleFormControlInput1" className="form-label" style={{color:'white'}}>Password</label>
                <input type="password" className="form-control" id="exampleFormControlInput2" placeholder="5342122"></input>

                <button type="submit" className= "btnlog"  >Login</button>
                <p style={{color:'white'}}>Don't have an account <Link className="LoginBtn"  to="/signup" style={{color:'red'}}>Register Here.</Link></p>
            </div>
            </form>
        </div>
    </div>
  )
}


export default Login

