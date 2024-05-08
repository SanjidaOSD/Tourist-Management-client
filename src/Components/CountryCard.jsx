import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
    return (

        <div>
            <Link to={`/country/${country.country}`}>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={country.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-pink-600 text-2xl font-bold">{country.country}</h2>
                        <h2 className="card-title">{country.description}</h2>

                        <div className="card-actions justify-end">


                        </div>
                    </div>
                </div>
            </Link>
        </div>

    );
};

export default CountryCard;