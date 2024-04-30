import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const Spot = ({ spot }) => {
    const {_id, spotName,country, location, description, coast, seasonality, travel, visitors, image } = spot || {}
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{country}</h2>
                <h2 className="card-title">{spotName}</h2>
                <h2 className="card-title">{seasonality}</h2>
                <h2 className="card-title">{coast}</h2>
                <h2 className="card-title">{travel}</h2>
                <h2 className="card-title">{visitors}</h2>
                <div className="card-actions justify-end">

                    <Link to={`/spotDetails/${_id}`}><button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};


Spot.propTypes = {
    spot: PropTypes.string.isRequired,
    
};

export default Spot;