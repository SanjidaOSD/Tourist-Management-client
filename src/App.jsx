
import { useLoaderData } from 'react-router-dom'
import './App.css'
import PlaceCard from './Components/PlaceCard';

function App() {

  const places = useLoaderData();
  return (
    <>
     
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

export default App
