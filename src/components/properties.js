import React, {useState, useEffect} from "react";
import '../styles/properties.css';
import PropertyCard from "./propertyCard";
import axios from 'axios';
import Alert from '../components/alert'




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
    
 

    
    return (
        <div>
            <div className="title">Properties Page</div>
            <Alert message={alert.message} />
            <div className="properties">
            {properties.map(property => (
                    <PropertyCard key={property.id} {...property} />
            ))}
                </div>
            
        </div>
    )
}


export default Properties;