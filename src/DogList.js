import React from "react";
import {Link} from "react-router-dom";

const DogList = ({dogs}) => {
    const showDogs = dogs.map(dog => (<li><Link key={dog.name} exact="true" to={`./${dog.name.toLowerCase()}`}>{dog.name}</Link></li>));
    return (
        <div>
            <h1>Here are all the dogs!</h1>
            <ul>
                {showDogs}
            </ul>
        </div>
    );
}

export default DogList;