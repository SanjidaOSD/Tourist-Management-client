import swal from 'sweetalert';

import UseAuth from '../Hooks/UseAuth';

const AddPlace = () => {
    const {user} = UseAuth() || {};
    const handleAddPlace = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const spotName = form.spotName.value;
        const country = form.country.value;
        const location = form.location.value;
        const description = form.description.value;
        const coast = form.coast.value;
        const seasonality = form.seasonality.value;
        const travel = form.travel.value;
        const visitors = form.visitors.value;
        const image = form.image.value;


        const newPlace = { name, email, spotName, country, location, description, coast, seasonality, travel, visitors, image }
        console.log(newPlace)

        // send data to the server
        fetch('https://m56-tourist-management-website-server.vercel.app/place' ,{
         method:'POST',
         headers:{
            'content-type': 'application/json'
         },
         body:JSON.stringify(newPlace)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if (data.insertedId) {
                swal({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success",
                    button: "Aww yiss!",
                  });
                
            }
        })
    }
    return (
        <div>
            
                <div>
                    <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col">
                            <div className="text-center">
                                <h1 className="text-5xl font-bold">Add Tourist Spot Place</h1>
                               
                            </div>
                            <div className="card shrink-0 w-full shadow-2xl bg-[#F4F3F0]">
                                <form onSubmit={handleAddPlace} className="card-body">

                                    <div className="md:flex md:gap-6">
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text">User Name</span>
                                            </label>
                                            <input type="name" name="name"defaultValue={user?.displayName} placeholder="Enter your name" className="input input-bordered w-full" required />
                                        </div>
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text">User Email</span>
                                            </label>
                                            <input type="email" name="email"defaultValue={user?.email} placeholder="Enter your email" className="input input-bordered" required />

                                        </div>
                                    </div>
                                    <div className="md:flex md:gap-6">
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text">Spot Name</span>
                                            </label>
                                            <input type="spot name" name="spotName" placeholder="Enter spot name" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text">Country Name</span>
                                            </label>
                                            <input type="country name" name="country" placeholder="Enter country name" className="input input-bordered" required />

                                        </div>
                                    </div>
                                    <div className="md:flex md:gap-6">
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text">Location</span>
                                            </label>
                                            <input type="location" name="location" placeholder="location" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text">Short Description</span>
                                            </label>
                                            <input type="description" name="description" placeholder="description" className="input input-bordered" required />

                                        </div>
                                    </div>
                                    <div className="md:flex md:gap-6">
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text">Coast</span>
                                            </label>
                                            <input type="coast" name="coast" placeholder="coast" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text">Seasonality</span>
                                            </label>
                                            <input type="seasonality" name="seasonality" placeholder="seasonality" className="input input-bordered" required />

                                        </div>
                                    </div>
                                    <div className="md:flex md:gap-6">
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text">Travel Time</span>
                                            </label>
                                            <input type="travel time" name="travel" placeholder="travel time" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text">TotalVisitors PerYear</span>
                                            </label>
                                            <input type="visitors" name="visitors" placeholder="totalVisitorsPerYear" className="input input-bordered" required />

                                        </div>
                                    </div>

                                    <div className="form-control md:w-full">
                                        <label className="label">
                                            <span className="label-text">Image</span>
                                        </label>
                                        <input type="text" name="image" placeholder="image url" className="input input-bordered" required />

                                    </div>

                                    <div className="form-control mt-6">
                                        <button className="btn btn-ghost bg-pink-300 text-white">Add Place</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        
        </div >
    );
};

export default AddPlace;