import React, {useState, useEffect} from "react";
import '../styles/properties.css';
import PropertyCard from "./propertyCard";
import axios from 'axios';
import Alert from '../components/alert'
import Sidebar from "./sidebar";
import { useLocation } from "react-router-dom";



const Properties = () => {

   const initialState = {
        properties: [],
        
    }
    const [properties, setProperties] = useState([initialState.properties]);
    const [alert, setAlert] = useState("message");
    

 

    useEffect(() => {
        axios.get(`http://localhost:4000/api/v1/PropertyListing`)
            .then(({ data }) => {
                setProperties(data)
            })
            .catch((error)=> {
    setAlert({ message: "There was an error, try again!" })
})
    }, []);

    

    const { search } = useLocation();
    
    useEffect(() => { 
        axios.get(`http://localhost:4000/api/PropertyListing${search}`)
            .then(({ data }) => setProperties(data))
        .catch(err => console.error(err))
    }, [search]);
 

    
    return (
        <div className="properties_page">
            <div className="title">Properties Page</div>
            <h1>List of Properties</h1>
            <Alert message={alert.message} />
            <Sidebar />
            <div className="properties">
            {properties.map(property => (
                    <PropertyCard key={property._id} {...property} />
            ))}
                </div>
            
        </div>
    )
}


export default Properties;