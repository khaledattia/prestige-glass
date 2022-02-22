// import { Carousel } from '@components/Carousel/Carousel';
// import { Responsibility } from '@pages/Home/Responsibility/Responsibility';
// import { WhyUs } from '@pages/Home/WhyUs/WhyUs';
// import { Gallery } from '@pages/Home/Gallery/Gallery';
// import { Duty } from '@pages/Home/Duty/Duty';

import { Routes, Route } from 'react-router-dom'
import { Home } from '@pages/Home';
import About from '@pages/About';
import Contacts from '@pages/Contacts';
import Gallery from '@pages/Gallery';
import Services from '@pages/Services';
import NotFoundPage from '@pages/NotFoundPage/NotFoundPage'
import PaymentMethods from '@pages/PaymentMethods/PaymentMethods';

import { NavBar }  from '@components/NavBar/NavBar';
import { Footer }  from '@components/Footer/Footer';
import ScrollInit from '@components/ScrollInit';
import { Animation } from '../utils/hooks/Animation';
import { ScrollToTop } from '@components/ScrollToTop/ScrollToTop';
import './App.css'; 
import { AsideSocial } from '@components/AsideSocial/AsideSocial';
function App() {
  

  return (
    

    <>
      <ScrollToTop />
      <AsideSocial />
      <Animation />
      <ScrollInit />
      <NavBar />

      <Routes>

        <Route path = "/"                  element = { <Home /> }/>
        <Route path = "/about-us"          element = { <About /> }/>
        <Route path = "/contact-us"        element = { <Contacts /> }/>
        <Route path = "/gallery"           element = { <Gallery /> }/>
        <Route path = "/services"          element = { <Services /> }/>
        <Route path = "/payment-methods"   element = { <PaymentMethods /> }/>
        <Route path = "/*"                 element = { <NotFoundPage /> }/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
