
import '../styles/app.css';
import NavBar from './navbar';
import {Routes, Route} from 'react-router-dom'
import Properties from './properties';
import AddProperty from './addproperty';
import React from 'react';
import PropertyCard from './propertyCard';

const App =() => {
  return (
    <div className="App">
      
        <NavBar />
        <Routes>
          <Route path="/" element={<Properties />} />
        <Route path="/add-property" element={<AddProperty />} />
        
        </Routes>
          
    </div>
  );
}

export default App;
