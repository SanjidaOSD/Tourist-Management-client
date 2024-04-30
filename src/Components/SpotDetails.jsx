import { useLoaderData } from "react-router-dom";


const SpotDetails = () => {
    const spot = useLoaderData()
    console.log(spot)
    




    return (
        <div>
            <h2>Detailsssss</h2>
        </div>
    );
};

export default SpotDetails;