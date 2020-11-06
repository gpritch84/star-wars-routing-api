import Axios from 'axios';
import PersonCard from './PersonCard';
import PlanetCard from './PlanetCard';
import { useState, useEffect } from 'react';

const Display = props => {

    const [facts, setFacts] = useState([])

    useEffect(() => {
        Axios.get(`https://swapi.dev/api/${props.category}/${props.id}`)
            .then(res => setFacts(res.data))
            .catch(err => console.log(err))
    }, [props])

    return (
        <div>
            {props.category == 'people' ? <PersonCard factCard={facts} /> : <PlanetCard factCard={facts} />}
        </div>
    );
}

export default Display;