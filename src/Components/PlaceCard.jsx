
const PlaceCard = ({place}) => {
    const { name, email, spot, country, location, description, coast, seasonality, travel, visitors, image } = place
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Movie" className="w-1/2 h-64" /></figure>
            <div className="card-body">
            <h2 className="card-title">{spot}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">details</button>
                </div>
            </div>
        </div>
    );
};

export default PlaceCard;