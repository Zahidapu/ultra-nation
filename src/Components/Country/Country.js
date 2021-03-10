import React from 'react';
import "./Country.css";

const Country = (props) => {
    const{flag,name,population,region} = props.country;
    const handleAddCountry=props.handleAddCountry;
    return (
        <div className="country">
            <img src={flag} alt=""/>
            <h4>{name}</h4>
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick={()=>handleAddCountry(props.country)} className="addCountry">Add Country</button>
        </div>
    );
};

export default Country;