import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Catlog from './components/Catalog';
import Cart from './components/Cart';

function App() {
  return <>
    <Header />
    <main>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Catlog/>} />
      <Route path='/cart' element={<Cart/>} />
    </Routes>
    </main>
    <Main/>
    <Footer />
  </>;
}

export default App
