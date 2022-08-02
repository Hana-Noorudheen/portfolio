
import './Home.css';

import '../Assests/vendor/bootstrap/css/bootstrap.min.css';
import '../Assests/vendor/bootstrap-icons/bootstrap-icons.css';
import '../Assests/vendor/boxicons/css/boxicons.min.css';
import '../Assests/vendor/glightbox/css/glightbox.min.css';
import '../Assests/vendor/swiper/swiper-bundle.min.css';


import Header from './Header';
import Hero from './Hero';
import Main from './Main';
import Footer from './Footer';


function Home() {
  return (
    <div>
   <Header/>
   <Hero/>
   <Main/>
   <Footer/>
    </div>
  );
}

export default Home;