import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const Country = () => {
    const [allCountries, setAllCountries] = useState();
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/country')
            .then(res => res.json())
            .then(data => {
                setAllCountries(data);
                setLoader(false);
            })
    }, []);
    return (
        <div>
        {
            loader ?
                <div>
                    <span className="loading items-center justify-center ml-[200px] mt-[50px] md:ml-[550px] md:mt-[200px] loading-dots loading-lg"></span>
                </div>
                :
                <div className="grid md:grid-cols-3  gap-12">
                    {
                        allCountries.map(country => <CountryCard key={country._id} country={country}></CountryCard>)
                    }
                </div>

        }
    </div>
    );
};

export default Country;