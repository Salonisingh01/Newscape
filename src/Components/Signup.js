// import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import '../App.css';

 const Signup = () => {
    // const navigate =  useNavigate();
    // const [input,setInput] = useState({
    //     name: "",
    //     email:"",
    //     password:"",
    // });

    // to store value in local storage 

    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     localStorage.setItem("user", "value", JSON.stringify(input));
    //     navigate("/login");
    // };

  return (
    <div className="mainbody">
        <div className="details" >
            <h2 style={{color:'white'}}>Create an Account</h2>
            <div className="mb-3">
          <form >
                <label htmlFor="exampleFormControlInput1" className="form-label" style={{color:'white'}}>Your Name</label>
                <input   type="text" className="form-control" id="exampleFormControlInput1" placeholder="John"></input>
                
                <label htmlFor="exampleFormControlInput1" className="form-label" style={{color:'white'}}>Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>

                <label htmlFor="exampleFormControlInput1" className="form-label" style={{color:'white'}}>Password</label>
                <input   type="password" className="form-control" id="exampleFormControlInput3" placeholder="5342122"></input>
                
                {/* name="password" value={input.password} onChange={(e) => setInput({...input,[e.target.name]: e.target.value,})} */}

                <button type="submit" className=' btnsign'>Register</button> 

                <p style={{color:'white'}}>Already  have an account <Link className="LoginBtn" to="/login" style={{color:'red'}}> Login Here.</Link></p>
          </form>
            </div>
        </div>
    </div>
  )
}


export default Signup
