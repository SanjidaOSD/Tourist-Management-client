import { Link } from "react-router-dom";
import { IoMdStopwatch } from "react-icons/io";
import { FaSackDollar } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";




const PlaceCard = ({ place }) => {
    const { _id, name, email, spotName, country, location, description, coast, seasonality, travel, visitors, image } = place
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
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
                <h2 className="card-title">Total Visitors: {visitors}</h2>
                <div className="card-actions w-[50px]">

                    <Link to={`/spotDetails/${_id}`}><button className="btn lg:w-[320px] bg-pink-400 text-white">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PlaceCard;