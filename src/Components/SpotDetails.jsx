import { FaLocationDot } from "react-icons/fa6";
import { IoMdStopwatch } from "react-icons/io";
import { MdVisibility } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";


const SpotDetails = () => {
    const spot = useLoaderData()



    return (
        <div>

            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row lg:gap-24">
                    <img src={spot.image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h2 className="card-title text-3xl font-bold text-pink-600"><span className="text-xl">Country</span>: {spot.country}</h2>
                        <h2 className="card-title mb-2"><FaLocationDot></FaLocationDot>{spot.spotName}</h2>
                        <h2 className="card-title">Seasonality: {spot.seasonality}</h2>
                        <p className="mt-4 mb-4">{spot.description}</p>
                        <hr />
                        <div className="flex gap-28">
                            <h2 className="card-title">{spot.coast}$</h2>
                            <h2 className="card-title"><IoMdStopwatch></IoMdStopwatch>{spot.travel}</h2>
                        </div>
                        <hr />
                        <h2 className="card-title mt-4 mb-4"><MdVisibility></MdVisibility>Total visitors per year: {spot.visitors}</h2>

                        <Link to='/'><button className="btn bg-pink-400 text-white justify-end lg:ml-96">Back to home</button>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SpotDetails;