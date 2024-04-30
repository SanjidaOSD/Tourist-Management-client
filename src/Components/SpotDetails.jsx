import { Link, useLoaderData } from "react-router-dom";


const SpotDetails = () => {
    const spot = useLoaderData()



    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={spot.image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{spot.country}</h1>
                        <h1 className="text-2xl font-bold text-red-800">{spot.spotName}</h1>
                        <p className="py-6">{spot.description}</p>
                        <p className="py-6">{spot.location}</p>
                        <p className="py-6">{spot.seasonality}</p>
                        <p className="py-6">{spot.coast}</p>

                        <Link to='/'><button className="btn bg-slate-500 text-white">Back to home</button>
                        </Link>
                    </div>
                </div>
            </div>

         
        </div>
    );
};

export default SpotDetails;