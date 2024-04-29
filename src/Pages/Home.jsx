
import { useLoaderData } from 'react-router-dom'
// import './App.css'
import PlaceCard from '../Components/PlaceCard';
import Slider from '../Components/Slider';
import { Helmet } from 'react-helmet';

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
     
      <h1 className='text-6xl text-purple-500 font-bold'>tourist spot:{places.length}</h1>
     <div className='grid md:grid-cols-2 gap-4'>
     {
      places.map(place => <PlaceCard
         key={place._id} 
         place={place}
      ></PlaceCard>)
     }
     </div>
    </>
  )
}

export default Home;
