import { useEffect } from "react";
import PropTypes from 'prop-types';


const MyList = ({ place }) => {
    useEffect(() => {

        if (place && place.email) {
            fetch(`http://localhost:5000/myAddList/${place.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }, [place]);

    return (
        <div>
            <h3>tttttttttttttt</h3>
        </div>
    );
};



MyList.propTypes = {
    place: PropTypes.shape({
        email: PropTypes.string.isRequired,
    })
};

export default MyList;
