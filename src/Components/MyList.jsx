import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import UseAuth from "../Hooks/UseAuth";
import SingleListItem from "./SingleListItem";


const MyList = () => {
    const [loader, setLoader] = useState(true);
    const [myLists, setMyLists] = useState();
    const { user } = UseAuth() || {};
    console.log(user.email)
    useEffect(() => {
        fetch(`http://localhost:5000/myList/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyLists(data);
                setLoader(false);

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    }, [user]);

    return (
        <div>
            {
                loader ?
                    <div>
                        <span className="loading items-center justify-center ml-[200px] mt-[50px] md:ml-[550px] md:mt-[200px] loading-dots loading-lg"></span>
                    </div>
                    :

               <div>
                     <div className="grid grid-cols-12 bg-slate-500 text-white border-x mt-12">
                        <div className="flex justify-center items-center col-span-1 border-y  py-2">
                            <h1>SL No</h1>
                        </div>
                        <div className="col-span-4 flex justify-center items-center border-y border-s py-2">
                            <h1>Spot Name</h1>
                        </div>
                        <div className="col-span-2 flex justify-center items-center border-y border-s py-2">
                            <h1>Conuntry</h1>
                        </div>
                        <div className="col-span-2 flex justify-center items-center border-y border-s py-2">
                            <h1>Average Cost</h1>
                        </div>
                        <div className="col-span-3 flex justify-center items-center border-y border-s py-2">
                            <h1>Actions</h1>
                        </div>
                    </div>
         {
                myLists.map((myList, idx) => <SingleListItem key={myList._id} myList={myList} idx={idx}></SingleListItem>)
            }
               </div>

            }
        </div>

    );
};



MyList.propTypes = {
    place: PropTypes.shape({
        email: PropTypes.string.isRequired,
    })
};

export default MyList;
