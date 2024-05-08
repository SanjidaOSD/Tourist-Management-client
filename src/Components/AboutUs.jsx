import tajmahal from '../assets/tajmahal2.jpg'
import banner from '../assets/banner1.jpg'
import { Link } from 'react-router-dom';
const AboutUs = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content relative flex-col lg:flex-row">
                    <img src={tajmahal} className='lg:w-[50%] rounded-lg shadow-2xl' />
                    <img src={banner} className='lg:w-[30%] w-[50%] absolute lg:left-96 lg:lg:top-[60%] border-8 border-pink-500 rounded-lg shadow-2xl' />
                    <div>
                        <div className='lg:ml-44 lg:mt-0 mt-28'>
                            <h1 className='text-pink-600 mb-6 font-bold text-xl'>About Us</h1>
                            <h1 className="text-5xl font-bold">A Simple Perfect Place To Get Lost</h1>
                            <p className="py-6">Treat your self with a journer to your inner self.Visit a mystique Tibet and start your spiritual adventure.We promise, you'll enjoy every step you make</p>
                            <Link to='/allSpot'><button className="btn bg-pink-300">See more</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;