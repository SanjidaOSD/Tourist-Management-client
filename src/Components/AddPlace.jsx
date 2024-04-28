
const AddPlace = () => {
    return (
        <div>
            <form>
                <div>
                    <label>
                        <span>Spot Name</span>
                    </label>
                    <label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                    </label>

                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
            </form>
        </div>
    );
};

export default AddPlace;