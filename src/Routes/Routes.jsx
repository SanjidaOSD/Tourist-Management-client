
import { createBrowserRouter } from "react-router-dom";
// import About from "../Pages/About";

import NotFound from "../Pages/NotFound";
import AddPlace from "../Components/AddPlace";
import UpdatePlace from "../Components/UpdatePlace";
import Github from "../Pages/GithubLogin";
import EmailLogin from "../Pages/EmailLogin";
// import CardDetails from "../Pages/CardDetails";
import PrivetRoutes from "../Routes/PrivetRoutes";

import Root from "../Layout/Root";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import ContactUs from '../Pages/ContactUs';
import Home from "../Pages/Home";
import MyList from "../Components/MyList";
import AllTouristSpot from "../Components/AllTouristSpot";
import SpotDetails from "../Components/SpotDetails";
import CountryDetails from "../Pages/CountryDetails";
// import AddPlace from '../Components/AddPlace'



const routes = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<NotFound></NotFound>,
        children:[
           
            {
                path: "/",
                element: <Home></Home>,  
                loader: () => fetch('https://m56-tourist-management-website-server.vercel.app/place')
              },
              {
                path:'/country/:country',
                element:<CountryDetails></CountryDetails>,
                loader:({params}) => fetch(`https://m56-tourist-management-website-server.vercel.app/country/${params.country}`)

              },
              {
                  path:'/allSpot',
                  element:<AllTouristSpot></AllTouristSpot>
              },
              {
                path:'/AddPlace',
                element:<AddPlace></AddPlace>
              },
              {
                path:'/UpdatePlace',
                element:<UpdatePlace></UpdatePlace>
              },
              {
                path:'/myList/:email',
                element:<PrivetRoutes><MyList></MyList></PrivetRoutes>
              },
              {
                path:'/spotDetails/:_id',
                element:<PrivetRoutes><SpotDetails></SpotDetails></PrivetRoutes>,
                loader: ({params}) => fetch(`https://m56-tourist-management-website-server.vercel.app/place/${params._id}`)
                 
                    
                
              },
           
           
           
            {
               path:'/contact',
               element:<PrivetRoutes><ContactUs></ContactUs></PrivetRoutes>
            },
           
            {
                path:'/login',
                element:<Login></Login>
            },
            {
               path:'/emailLogin',
               element:<EmailLogin></EmailLogin>
            },
            {
                path:'/githubLogin',
                element:<Github></Github>

            },
            {
                path:'/register',
                element:<Register></Register>,
            },
          
        ]
    }
]);
export default routes