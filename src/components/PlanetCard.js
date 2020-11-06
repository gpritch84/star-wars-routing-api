const PlanetCard = props => {
    const {factCard} = props;

    return(
        <div>
            <div className="card col-5">
                <div className="card-body">
                    <h1 className="card-title">{factCard.name}</h1>
                    <p>Climate: {factCard.climate}</p>
                    <p>Terrain: {factCard.terrain}</p>
                    <p>Surface Water: {factCard.surface_water}</p>
                    <p>Population: {factCard.population}</p>
                </div>
            </div>
        </div>
    );
}

export default PlanetCard;