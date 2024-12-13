import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Views/Home/Home';
import About from './Views/About/About';
import './common.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/about',
    element: <About/>
  }
])

root.render(<RouterProvider router={router}/>)


