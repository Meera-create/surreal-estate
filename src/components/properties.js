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
                console.log(data)
            })
            .catch((error)=> {
    setAlert({ message: "There was an error, try again!" })
})
    }, []);

    

    const { search } = useLocation();
    
    useEffect(() => {
        console.log(search)
        axios.get(`http://localhost:4000/api/v1/PropertyListing${search}`)
            .then(({ data }) => {
                setProperties(data)
                console.log(data)
            })
            .catch(err => {
                console.log('my error')
                console.error(err)
            })
    
    }, [search]);
 

    
    return (
        <div className="properties_page">
            <Sidebar />
            
            <h1 className="title_page">List of Properties</h1>
            
            {alert && <Alert message={alert.message} />}
            
            <div className="properties">
                {properties.map((property,index) => (
                <div className="single_property" key={index}>
                        <PropertyCard  {...property} />
                    </div>
            ))}
                </div>
            
        </div>
    )
}


export default Properties;

// 