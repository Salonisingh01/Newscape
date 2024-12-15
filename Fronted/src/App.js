import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Middle from './Components/Middle';
import { Route,Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';



const App =() => {

  const user = localStorage.getItem("token");



 
    return (
      <div>
        
        <Navbar/>
        <Routes>
          {user && <Route exact path='/' element={<News  key="general" pageSize={5} country="us" category="general"/>}></Route>}
          <Route exact path='/business' element={<News  key="business" pageSize={5} country="us" category="business"/>}></Route>
          <Route exact path='/entertainment' element={<News  key="entertainment" pageSize={5} country="us" category="entertainment"/>}></Route>
          <Route exact path='/health' element={<News  key="health" pageSize={5} country="us" category="health"/>}></Route>
          <Route exact path='/sports' element={<News   key="sports" pageSize={5} country="us" category="sports"/>}></Route>
          <Route exact path='/technology' element={<News   key="technology" pageSize={5} country="us" category="technology"/>}></Route>
          <Route exact path='/science' element={<News  key="science" pageSize={5} country="us" category="science"/>}></Route>
         
          <Route exact path='/Login' element={<Login/>}> </Route>
          <Route exact path='/signup' element={<Signup/>}> </Route>
        
         
        </Routes>
        <Middle/>
        <Footer/>
        
      </div>
    );
  }

export default App;
// export default App