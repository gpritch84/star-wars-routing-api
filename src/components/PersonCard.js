const PersonCard = props => {
    const {factCard} = props;

    return(
        <div>
            <div className="card col-5 d-flex align-item-center">
                <div className="card-body">
                    <h1 className="card-title">{factCard.name}</h1>
                    <p>Height: {factCard.height}</p>
                    <p>Mass: {factCard.mass}</p>
                    <p>Hair Color: {factCard.hair_color}</p>
                    <p>Skin Color: {factCard.skin_color}</p>
                </div>
            </div>
        </div>
    );
}

export default PersonCard;