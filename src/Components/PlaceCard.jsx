import { Link } from "react-router-dom";
import { IoMdStopwatch } from "react-icons/io";
import { MdVisibility } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";




const PlaceCard = ({place}) => {
    const {_id, name, email, spotName, country, location, description, coast, seasonality, travel, visitors, image } = place
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold"><span className="text-xl">Country</span>: {country}</h2>
                <h2 className="card-title"><FaLocationDot></FaLocationDot>{spotName}</h2>
                <h2 className="card-title">Seasonality: {seasonality}</h2>

                <div className="flex gap-28">
                <h2 className="card-title">{coast}$</h2>
                <h2 className="card-title"><IoMdStopwatch></IoMdStopwatch>{travel}</h2>
                </div>
                <h2 className="card-title"><MdVisibility></MdVisibility>{visitors}</h2>
                <div className="card-actions justify-end">

                    <Link to={`/spotDetails/${_id}`}><button className="btn bg-slate-500 text-white">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PlaceCard;