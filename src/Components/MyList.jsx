import { useEffect } from "react";
import PropTypes from 'prop-types';
import UseAuth from "../Hooks/UseAuth";


const MyList = () => {
    const {user} = UseAuth() || {};
    console.log(user.email)
    useEffect(() => {
            fetch(`http://localhost:5000/myAddList/${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        
    }, [user]);

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
