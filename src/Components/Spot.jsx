import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdStopwatch } from "react-icons/io";
import { MdVisibility } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";



const Spot = ({ spot }) => {
    const {_id, spotName,country, location, description, coast, seasonality, travel, visitors, image } = spot || {}
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
           <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold text-pink-600"><span className="text-xl">Country</span>: {country}</h2>
                <h2 className="card-title"><FaLocationDot></FaLocationDot>{spotName}</h2>
                <h2 className="card-title">Seasonality: {seasonality}</h2>
<hr />
                <div className="flex gap-28">
                <h2 className="card-title"><FaSackDollar></FaSackDollar>{coast}</h2>
                <h2 className="card-title"><IoMdStopwatch></IoMdStopwatch>{travel}</h2>
                </div>
                <hr />
                <h2 className="card-title"><MdVisibility></MdVisibility>Total visitors per year: {visitors}</h2>
                <div className="card-actions">

                    <Link to={`/spotDetails/${_id}`}><button className="btn bg-pink-400 lg:w-[350px]">Details</button>
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