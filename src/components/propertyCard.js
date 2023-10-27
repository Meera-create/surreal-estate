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

        <div className="property_lists">
            <h1 className="title">List of Properties</h1>
            <h2 className="property_title">{title}</h2>
            <h3 className="price">{price}</h3>
            <h3 className="location">{type},{city}</h3>
            <p className="property_details">bathrooms:{bathrooms}, bedrooms:{bedrooms}</p>
            <p className="email">{email}</p>
            
        </div>
    )

};

export default PropertyCard;