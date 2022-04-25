import React from "react";
import {Link, useParams} from "react-router-dom";

const DogDetails = ({dogs}) => {
    const {name} = useParams();
    const dog = dogs.find(d => d.name.toLowerCase() === name.toLowerCase());
    const info = dog.facts.map((fact, i) => (<li key={i}>{fact}</li>));
    return (
        <div>
            <h1>{dog.name}</h1>
            <h1>Age: {dog.age}</h1>
            <img src={dog.src}/>
            <ul>
                {info}
            </ul>
            <Link to="/dogs">See all Dogs</Link>
        </div>
    );
}

export default DogDetails;