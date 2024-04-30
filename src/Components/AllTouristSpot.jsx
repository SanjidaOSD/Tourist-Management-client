import { useEffect, useState } from "react";
import Spot from "./Spot";

const AllTouristSpot = () => {
    const [allSpots, setAllSpots] = useState();
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/place')
            .then(res => res.json())
            .then(data => {
                setAllSpots(data);
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

                    <div>
                        <h1 className=' text-center text-5xl text-red-800 font-bold mt-24 mb-16'>All Tourist spot</h1>
                        <div className="grid md:grid-cols-3 gap-12 mt-12">
                            {
                                allSpots.map(spot => <Spot key={spot._id} spot={spot}></Spot>)
                            }
                        </div>
                    </div>

            }
        </div>
    );
};

export default AllTouristSpot;