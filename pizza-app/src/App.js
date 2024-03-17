import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navigation from "./componet/Navigation";
import ProductsPage from "./pages/ProductsPage";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import { CartContext } from "./CartContext";
import { useState, useEffect } from "react";
import { getCart, storeCart } from './helper';

const App  = () =>{
  const [cart, setCart] = useState ({});

  //fetch from local storage
  useEffect(() => {
    getCart().then(cart => {
      setCart(JSON.parse(cart));
    });
  }, []);
  
  useEffect(() => {
      storeCart(JSON.stringify(cart));
  }, [cart]);
  return (
    <>
   <Router>
         <CartContext.Provider value={{ cart, setCart }}>
         <Navigation/>
         <Routes>
        <Route path="/" Component={Home} exact></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/products" exact Component={ProductsPage}></Route>
        <Route path="/products/:id"  Component={SingleProduct}></Route>

        <Route path="/cart" Component={Cart}></Route>

      </Routes>
      </CartContext.Provider>
    </Router> 
    </>
    
  )
  }
  
  export default App;