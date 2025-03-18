import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';



import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './Components/Home/Home.jsx';
import Mobiles from './Components/Mobileitem/Mobiles.jsx';
import Earbuds from './Components/Earbuds/Earbuds.jsx';
import Smartwatch from './Components/Smartwatchitem/Smartwatch.jsx';
import Speakers from './Components/Speakersitem/Speakers.jsx';
import TV from './Components/TV/TV.jsx';

import Cart  from './Components/Addtocart/Cart.jsx'
import {store} from './App/store.js'
import { Provider } from 'react-redux';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='Mobiles' element={<Mobiles/>}/>
      <Route path='Earbuds' element={<Earbuds/>}/>
      <Route path='Smartwatch' element={<Smartwatch/>}/>
      <Route path='Speakers' element={<Speakers/>}/>
      <Route path='TV' element={<TV/>}/>
      <Route path='Cart' element={<Cart/>}/>
      
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);
