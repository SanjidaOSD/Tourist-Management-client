
import img1 from '../assets/tour1.jpg'
import img3 from '../assets/tour3.jpg'
import img5 from '../assets/tour5.jpg'

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation,Autoplay } from 'swiper/modules';

const Slider = () => {
    return (
        <div>
           <div>
           <Swiper navigation={true} 
           modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={
                {delay: 2000}
            } 
            className="mySwiper">
                <SwiperSlide><div className='w-full h-[600px]'>
                <img src={img1} alt="" />
            </div></SwiperSlide>
                <SwiperSlide><div className='w-full h-[600px]'>
                <img src={img3} alt="" />
            </div></SwiperSlide>
                <SwiperSlide><div className='w-full h-[600px]'>
                <img src={img5} alt="" />
            </div></SwiperSlide>
               
            </Swiper>
           </div>
        </div>
    );
};

export default Slider;





      