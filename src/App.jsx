import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Catlog from './components/Catalog';
import Cart from './components/Cart';
import Carousel from './components/Carousel';
import { imagesUrls } from './imageUrls';
import AboutUs from './components/AboutUs';

function App() {
  return <>
    <Header />
    <main>
    <Routes>
      <Route path='/' element={<Carousel urls={imagesUrls} />} />
      <Route path='/products' element={<Catlog/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/aboutus' element={<AboutUs/>} />
    </Routes>
    </main>
    <Footer />
  </>;
}

export default App
