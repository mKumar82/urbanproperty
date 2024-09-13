import React, { useEffect, useState } from "react";
import propertyService from "../services/propertyService";

function PropertyListingPage() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await propertyService.getAllProperties();
        setProperties(data);
      } catch (error) {
        console.error("Failed to fetch properties", error);
      }
    };
    fetchProperties();
  }, []);

  return (
    <div>
      <h2>Property Listings</h2>
      <div>
        {properties.map((property) => (
          <div key={property._id}>
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <p>{property.price}</p>
            <p>{property.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyListingPage;
