import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CountryDetails = () => {
    const { country } = useParams();
    const [countryDetails, setCountryDetails] = useState();
    const [loader, setLoader] = useState(true);


    useEffect(() => {
        fetch(`http://localhost:5000/country/${country}`)
            .then(res => res.json())
            .then(data => {
                setCountryDetails(data);
                setLoader(false);
            })
    })

    return (
        <div>
            {
                loader ?
                    <div>
                        <span className="loading items-center justify-center ml-[200px] mt-[50px] md:ml-[550px] md:mt-[200px] loading-dots loading-lg"></span>
                    </div>
                    :
                    <div className="grid md:grid-cols-3">
                        {
                            countryDetails.map(countryDetail => <div key={countryDetail._id}>
                                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                    <figure><img src={countryDetail.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{countryDetail.country}</h2>
                                        <h2 className="card-title">{countryDetail.spotName}</h2>
                                        <h2 className="card-title">{countryDetail.seasonality}</h2>
                                        <h2 className="card-title">{countryDetail.coast}</h2>
                                        <h2 className="card-title">{countryDetail.travel}</h2>
                                        <h2 className="card-title">{countryDetail.visitors}</h2>
                                        <div className="card-actions justify-end">

                                            <Link to={`/spotDetails/${countryDetail._id}`}><button className="btn btn-primary">View Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>




                            </div>)
                        }
                    </div>

            }
        </div>
    );
};

export default CountryDetails;