import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddPlace from './Components/AddPlace.jsx';
import UpdatePlace from './Components/UpdatePlace.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,  
  },
  {
    path:'AddPlace',
    element:<AddPlace></AddPlace>
  },
  {
    path:'UpdatePlace',
    element:<UpdatePlace></UpdatePlace>
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
