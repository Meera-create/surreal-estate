import React, { useState } from "react";
import "../styles/addProperty.css";
import axios from 'axios';
import Alert from './alert'

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "flat",
      bedrooms: "",
      bathrooms: "",
      price: 0,
      email: "",
    },
    alert:{
      alertMessage: "",
      isSuccess: false,
      
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log('submitting')
    setAlert({
      alertMessage: '',
      isSuccess: false,
      
    });
  

    axios.post(`http://localhost:4000/api/v1/PropertyListing`, fields)
      .then(() => {
        console.log('property added')
        setAlert({
          alertMessage: 'Property Added',
          isSuccess: true,
        })
      })
  
      
      .catch(() => 
        setAlert({
          alertMessage: 'Server error, please try again later',
          isSuccess: false,
      })
    )

  };


  const handleFieldChange = (event) => {
    
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <form onSubmit={handleAddProperty} >
        <Alert message={alert.message} success={alert.isSuccess} /> 
     
        <div className="title">ADD A PROPERTY</div>

        <div id="boxes">
          <label htmlFor="title">Title of Property</label>
          <input
            placeholder="2 bedroom house"
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </div>

        <div id="boxes">
          <label htmlFor="city">City </label>
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </div>

        <div id="boxes">
          <label htmlFor="type">Type of Property</label>
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="flat">Flat</option>
            <option value="detached">Detached</option>
            <option value="semi-detached">Semi-Detached</option>
            <option value="terraced">Terraced</option>
            <option value="end of terrace">End of Terrace</option>
            <option value="cottage">Cottage</option>
            <option value="bungalow">Bungalow</option>
          </select>
        </div>

        <div id="boxes">
          <label htmlFor="bedrooms"></label>
            Number of Bedrooms
            <input
              id="bedrooms"
              placeholder="2"
              name="bedrooms"
              value={fields.bedrooms}
              onChange={handleFieldChange}
            />
        </div>

        <div id="boxes">
          <label htmlFor="bathrooms">Number of bathrooms</label>
          <input
            id="bathrooms"
            placeholder="1"
            name="bathrooms"
            value={fields.bathrooms}
            onChange={handleFieldChange}
          />
        </div>

        <div id="boxes">
          <label htmlFor="price">Price</label>
          <input
            id="price"
            placeholder="10000"
            name="price"
            value={fields.price}
            onChange={handleFieldChange}
          />
        </div>

        <div id="boxes">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            placeholder="email@gmail.com"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </div>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;
