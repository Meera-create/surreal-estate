
import '../styles/app.css';
import NavBar from './navbar';
import {Routes, Route} from 'react-router-dom'
import Properties from './properties';
import AddProperty from './addproperty';
import React, {useState} from 'react';
import  FacebookLogin  from 'react-facebook-login';


const App = (props) => {
  
  const initialState = {
    userID:""
  }

  const [userId, setUserId] = useState(initialState.userId)
  
  const handleLogin = (response) => {
    setUserId(response)
    

  }

  const handleLogout =  () =>{
     window.FB.onLogout()
 }


  return (
    <div className="App">
      
      <NavBar onLogin={handleLogin} userID={userId} onLogout={handleLogout}
      {...userId? <button onClick={props.onLogout}>Sign Out</button>:<FacebookLogin/>}
      />
        <Routes>
        <Route path="/" element={<Properties />} />
    
        <Route path="/add-property" element={<AddProperty />} />
        
        </Routes>
          
    </div>
  );
}

export default App;
