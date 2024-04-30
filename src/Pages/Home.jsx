
import { useLoaderData } from 'react-router-dom'
// import './App.css'
import PlaceCard from '../Components/PlaceCard';
import Slider from '../Components/Slider';
import { Helmet } from 'react-helmet';
import Country from '../Components/Country';


function Home() {

  const places = useLoaderData();



  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="mt-24">
        <Slider></Slider>
      </div>


      <h1 className=' text-center text-5xl text-red-800 font-bold mt-12 mb-12'>tourist spot</h1>
      <div className='grid md:grid-cols-3 gap-4'>
        {
          places.map(place => <PlaceCard
            key={place._id}
            place={place}
          ></PlaceCard>)
        }

      </div>
      <div>
        <h3 className='text-center text-5xl text-purple-500 font-bold mt-12 mb-12'>Countries</h3>
        <div>
          <Country></Country>
        </div>

      </div>
    </>
  )
}

export default Home;
