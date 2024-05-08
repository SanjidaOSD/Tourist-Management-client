
import img1 from '../assets/tajmahal.jpg'
import img3 from '../assets/boddho.jpg'
import img5 from '../assets/banner2.jpg'

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (

        <div>
            <Swiper navigation={true}
                modules={[Navigation, Autoplay]}
                loop={true}
                autoplay={
                    { delay: 2000 }
                }
                className="mySwiper">
                <SwiperSlide><div className='relative rounded-xl w-full lg:h-[600px]'>
                    <img src={img1} alt="" className='rounded-xl' />
                </div>
                    <div className='absolute flex items-center h-full left-0 top-0  from-[#151515] to-[rgba(21,21,21,0)] rounded-xl'>
                        <div className='text-white space-y-5 lp-12 text-center justify-center'>
                            <h2 className='text-3xl font-bold text-center justify-center lg:ml-60 lg:mb-52 w-3/2'><span className='text-6xl text-pink-600 mb-12'>Your Journey Begins</span> <br /> <br />A journey of a 1000 miles starts with a single step. <br />
                                <Link to="/allSpot"><button className="btn btn-active bg-pink-400 mt-12">Discover More</button></Link>

                            </h2>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className='w-full h-[600px]'>
                    <img src={img3} alt="" className='rounded-xl' />
                </div>
                    <div className='absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl'>
                        <div className='text-white space-y-5 lp-12 text-center justify-center'>
                            <h2 className='text-3xl font-bold text-center justify-center lg:ml-60 lg:mb-52 w-3/2'><span className='text-6xl text-pink-600 mb-12'>Your Journey Begins</span> <br /> <br />A journey of a 1000 miles starts with a single step. <br />
                                <Link to="/allSpot"><button className="btn btn-active bg-pink-400 mt-12">Discover More</button></Link>
                            </h2>

                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide><div className='w-full h-[600px]'>
                    <img src={img5} alt="" className='rounded-xl' />
                </div>
                    <div className='absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl'>
                        <div className='text-white space-y-5 lp-12 text-center justify-center'>
                            <h2 className='text-3xl font-bold text-center justify-center lg:ml-60 lg:mb-52 w-3/2'><span className='text-6xl text-pink-600 mb-12'>Your Journey Begins</span> <br /> <br /> A journey of a 1000 miles starts with a single step. <br />
                                <Link to="/allSpot"><button className="btn btn-active bg-pink-400 mt-12">Discover More</button></Link>
                            </h2>

                        </div>
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>

    );
};

export default Slider;





