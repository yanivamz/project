import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Catalog from './components/Catalog';
import AboutUs from './components/AboutUs';
import "bootstrap/dist/css/bootstrap.min.css"
import ShopingCart from './components/ShopingCart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems(prevItems => [...prevItems, { ...product, quantity: 1 }]);
    }
    window.alert(` נוסף לעגלה : ${product.name}`);
  };

  const removeFromCart = (productId) => {
    console.log(productId);
    const updatedCartItems = [...cartItems];
  const itemIndex = updatedCartItems.findIndex(item => item.id === productId);
  
  if (itemIndex !== -1) {
    // יש פריט כזה בעגלה
    if (updatedCartItems[itemIndex].quantity > 1) {
      // עדכן כמות פריט אם היא גדולה מ־1
      updatedCartItems[itemIndex].quantity -= 1;
    } else {
      // אם זו כמות האחרונה - הסר את הפריט מהעגלה
      updatedCartItems.splice(itemIndex, 1);
    }
    setCartItems(updatedCartItems);
  }
    
    return

  };

  return <>
    <Header cartItems={cartItems}/>
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Catalog acrtItems={cartItems} addToCart={addToCart} />} />
        <Route path='/shopingCart' element={<ShopingCart cartItems={cartItems} addToCart={addToCart} 
        removeFromCart={removeFromCart} />} />
        <Route path='/aboutus' element={<AboutUs />} />
      </Routes>
    </main>
    <Footer />
  </>;
}

export default App
