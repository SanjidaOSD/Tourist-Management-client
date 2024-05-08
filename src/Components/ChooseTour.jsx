import { CiPlane } from "react-icons/ci";
import { RiShipLine } from "react-icons/ri";
import { GiPikeman } from "react-icons/gi";
import { PiMountains } from "react-icons/pi";
import { FaRegSun } from "react-icons/fa6";





const ChooseTour = () => {
    return (
       <div>
         <div className="hero" style={{backgroundImage: 'url(https://i.ibb.co/bQn02QZ/choose.jpg)'}}>
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold mb-6">Choose Tour</h1>
            <p className="mb-16">Find your next travel adventure and make it memorable.Explore <br />wildlife,enjoy seaside or book a cruise tour, <br />Check out our popular destanations.</p>

           <div className="flex gap-12">
           <button className="text-3xl hover:scale-125"><CiPlane className="h-24 w-24"></CiPlane>Self-Guided</button>
            <button className="text-3xl hover:scale-125"><RiShipLine className="h-24 w-24"></RiShipLine>Self-Guided</button>
            <button className="text-3xl hover:scale-125"><GiPikeman className="h-24 w-24"></GiPikeman>Adventure</button>
            <button className="text-3xl hover:scale-125"><PiMountains className="h-24 w-24"></PiMountains>Self-Guided</button>
            <button className="text-3xl hover:scale-125"><FaRegSun className="h-24 w-24"></FaRegSun>Self-Guided</button>
           </div>
          </div>
        </div>
      </div>
       </div>
    );
};

export default ChooseTour;