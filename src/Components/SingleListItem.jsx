import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const SingleListItem = ({myList, idx}) => {
    const handleDelete = (id) =>{
        
    }
    const {_id, name, email, spotName, country, location, description, coast, seasonality, travel, visitors, image } = myList

    return (
        <div>
            <div className="grid grid-cols-12 border-x font-medium">
                <div className="flex justify-center items-center col-span-1 border-b py-2">
                    <h1>{idx + 1}</h1>
                </div>
                <div className="col-span-4 flex justify-center items-center border-b border-s py-4">
                    <h1>{spotName}</h1>
                </div>
                <div className="col-span-2 flex justify-center items-center border-b border-s py-4">
                    <h1>{country}</h1>
                </div>
                <div className="col-span-2 flex justify-center items-center border-b border-s py-4">
                    <h1>{coast} $</h1>
                </div>
                <div className="col-span-3 flex justify-center items-center border-b border-s py-4 gap-5 flex-wrap">
                    <Link to={`/updateSpot/${_id}`}><button className='px-3 py-1 bg-blue-300 font-semibold text-black rounded-md'>Update</button></Link>
                    <button className='px-3 py-1 bg-blue-300 font-semibold text-black rounded-md'>Delete</button>
                </div>
            </div>
        </div>
    );
};


SingleListItem.propTypes = {
        myList: PropTypes.string.isRequired,
        idx: PropTypes.string.isRequired,
    
};

export default SingleListItem;