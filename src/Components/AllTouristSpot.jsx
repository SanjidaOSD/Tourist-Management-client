import { useEffect, useState } from "react";
import Spot from "./Spot";

const AllTouristSpot = () => {
    const [allSpots, setAllSpots] = useState();
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        fetch('https://m56-tourist-management-website-server.vercel.app/place')
            .then(res => res.json())
            .then(data => {
                setAllSpots(data);
                setLoader(false);
            })
    }, []);4
    
    return (
        <div>
            {
                loader ?
                    <div>
                        <span className="loading items-center justify-center ml-[200px] mt-[50px] md:ml-[550px] md:mt-[200px] loading-dots loading-lg"></span>
                    </div>
                    :

                    <div>
                        <h1 className=' text-center text-5xl font-bold mt-24 mb-4'>All Tourist spot</h1>
                        <p className='text-center text-xl mb-16'>Places of natural beauty such as beaches, tropical island resorts, national parks, <br /> mountains, deserts and forests, are examples of traditional tourist <br /> attractions which people may visit. </p>
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