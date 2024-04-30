import { useEffect, useState } from "react";
import Spot from "./Spot";

const AllTouristSpot = () => {
    const [allSpots, setAllSpots] = useState();
    const [loader, setLoader] = useState(true);
    
    useEffect(()=>{
        fetch('http://localhost:5000/place')
        .then(res => res.json())
        .then(data =>{
            setAllSpots(data);
            setLoader(false);
        })
    },[]);
    return (
        <div>
            {
                loader?
                <div>

                </div>
                :
               <div className="grid md:grid-cols-3">
                 {
                    allSpots.map(spot => <Spot key={spot._id} spot={spot}></Spot> )
                }
               </div>

            }
        </div>
    );
};

export default AllTouristSpot;