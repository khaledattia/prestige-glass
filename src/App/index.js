// import { Carousel } from '@components/Carousel/Carousel';
// import { Responsibility } from '@pages/Home/Responsibility/Responsibility';
// import { WhyUs } from '@pages/Home/WhyUs/WhyUs';
// import { Gallery } from '@pages/Home/Gallery/Gallery';
// import { Duty } from '@pages/Home/Duty/Duty';

import { Routes, Route } from 'react-router-dom'
import {Home} from '@pages/Home';
import About from '@pages/About';
import Contacts from '@pages/Contacts';
import Gallery from '@pages/Gallery';
import Services from '@pages/Services';
import Transactions from '@pages/Transactions/Transactions';
import NotFoundPage from '@pages/NotFoundPage/NotFoundPage'

import { NavBar }  from '@components/NavBar/NavBar';
import { Footer }  from '@components/Footer/Footer';
import ScrollInit from '@components/ScrollInit';
import { Animation } from '../utils/hooks/Animation';
import { ScrollToTop } from '@components/ScrollToTop/ScrollToTop';
import './App.css'; 
import { AsideSocial } from '@components/AsideSocial/AsideSocial';
function App() {
  // is_standalone_payment=true&error_occured=false&integration_id=1801946&merchant_commission=0&order=32969011&created_at=2022-02-16T22%3A03%3A07.221422&amount_cents=500000&data.message=BLOCKED&profile_id=156204&is_refunded=false&is_capture=false&is_3d_secure=true&is_voided=false&source_data.pan=2346&hmac=11ffa988a6cc02b2fa6848a586d1851775d6dac9b1aa658237da095d7e71e153605798c69f41a34221b8fc060812cac3261feffb7f5da554277b84e50dbd5f2d&source_data.sub_type=MasterCard&pending=false&owner=285145&is_refund=false&is_auth=false&id=26696542&txn_response_code=BLOCKED&currency=EGP&refunded_amount_cents=0&has_parent_transaction=false&is_void=false&captured_amount=0&source_data.type=card&success=false
  

  return (
    

    <>
      <ScrollToTop />
      <AsideSocial />
      <Animation />
      <ScrollInit />
      <NavBar />

      <Routes>
      
        
        

        <Route path = "/"           element = { <Home /> }/>
        <Route path = "/about-us"   element = { <About /> }/>
        <Route path = "/contact-us" element = { <Contacts /> }/>
        <Route path = "/gallery"    element = { <Gallery /> }/>
        <Route path = "/services"   element = { <Services /> }/>
        <Route path = "/transactions"   element = { <Transactions /> }/>
        <Route path = "/*"   element = { <NotFoundPage /> }/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
