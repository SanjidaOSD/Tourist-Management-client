import { useLoaderData } from "react-router-dom";


const SpotDetails = () => {
    const spot = useLoaderData()
    


    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{spot.country}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">

                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default SpotDetails;