
const AddPlace = () => {
    return (
        <div>
            <form>
                <div>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Spot Name</span>
                        </div>
                        <input type="text" placeholder="Spot name" className="input input-bordered w-full max-w-xs" />

                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Spot Name</span>
                        </div>
                        <input type="text" placeholder="Spot name" className="input input-bordered w-full max-w-xs" />

                    </label>


                    {/* ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}
                    <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col">
                            <div className="text-center">
                                <h1 className="text-5xl font-bold">Add Tourist Spot Place</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            </div>
                            <div className="card shrink-0 w-full shadow-2xl bg-[#F4F3F0]">
                                <form className="card-body">

                                    <div className="md:flex md:gap-6">
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text">User Name</span>
                                            </label>
                                            <input type="user name" name="name" placeholder="Enter your name" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                            <span className="label-text">User Email</span>
                                            </label>
                                            <input type="user email" name="email" placeholder="Enter your email" className="input input-bordered" required />

                                        </div>
                                    </div>
                                    <div className="md:flex md:gap-6">
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text">Spot Name</span>
                                            </label>
                                            <input type="spot name" name="name" placeholder="Enter spot name" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text">Country Name</span>
                                            </label>
                                            <input type="country name" name="country name" placeholder="Enter country name" className="input input-bordered" required />

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
                                            <input type="travel time" name="travel time" placeholder="travel time" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text">TotalVisitors PerYear</span>
                                            </label>
                                            <input type="totalVisitorsPerYear" name="totalVisitorsPerYear" placeholder="totalVisitorsPerYear" className="input input-bordered" required />

                                        </div>
                                    </div>
                                   
                                        <div className="form-control md:w-full">
                                            <label className="label">
                                                <span className="label-text">Image</span>
                                            </label>
                                            <input type="image" name="image" placeholder="image" className="input input-bordered" required />

                                        </div>
            
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </form >
        </div >
    );
};

export default AddPlace;