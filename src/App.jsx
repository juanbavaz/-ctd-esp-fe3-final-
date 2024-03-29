import { Route, Routes } from 'react-router-dom';
import { routes } from './Components/utils/routes';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {

      return (
            <>
                  <Navbar/>
                  <Routes>
                        <Route exact path={routes.home} element={<Home/>}/>
                        <Route path={routes.contact} element={<Contact/>}/>
                        <Route path={routes.dentist} element={<Detail/>}/>
                        <Route path={routes.favs} element={<Favs/>}/>
                  </Routes>
                  <Footer/>
            </>
      );
}

export default App;
