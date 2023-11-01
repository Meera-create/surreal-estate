import React from 'react';
import '../styles/propertyCard.css';

const PropertyCard = ({
    title,
    type,
    bathrooms,
    bedrooms,
    price,
    city,
    email
}) => {


    return(

        <div  >
            
            <h1 className="title">Property Details:</h1>
            <h2 className="property_title">{title}</h2>
            <h3 className="price">Price:£{price}</h3>
            <h3 className="type">Type of Property{type}</h3>
            <h3 className="city"> City:{city}</h3>
            <p className="property_details">Bathrooms:{bathrooms} Bedrooms:{bedrooms}</p>
            <p className="email">Contact email:{email}</p>
            
        </div>
    )

};

export default PropertyCard;