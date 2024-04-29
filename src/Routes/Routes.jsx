
import { createBrowserRouter } from "react-router-dom";
// import Home from "../Pages/Home/Home";
import About from "../Pages/About";

import NotFound from "../Pages/About";
// import App from "../App";
import AddPlace from "../Components/AddPlace";
import UpdatePlace from "../Components/UpdatePlace";
import Github from "../Pages/GithubLogin";
import EmailLogin from "../Pages/EmailLogin";
import CardDetails from "../Pages/CardDetails";
import PrivetRoutes from "../Routes/PrivetRoutes";

import Root from "../Layout/Root";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import ContactUs from '../Pages/ContactUs';
import Home from "../Pages/Home";
// import AddPlace from '../Components/AddPlace'



const routes = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<NotFound></NotFound>,
        children:[
            // {
            //     path: "/",
            //     element: <App></App>,  
            //     loader: () => fetch('http://localhost:5000/place')
            //   },
            {
                path: "/",
                element: <Home></Home>,  
                loader: () => fetch('http://localhost:5000/place')
              },
              {
                path:'AddPlace',
                element:<AddPlace></AddPlace>
              },
              {
                path:'UpdatePlace',
                element:<UpdatePlace></UpdatePlace>
              },
            {
                path:'/cards/:id',
                element:<PrivetRoutes><CardDetails></CardDetails></PrivetRoutes>
            },
            {
                path:'/about',
                element:<About></About>
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