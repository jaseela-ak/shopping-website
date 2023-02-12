import { BrowserRouter,Router,Route } from "react-router-dom";

import Home from "./Pages/home/home";
import Cart from "./Pages/cart/cart"
import ProductDetails from "./Pages/productDetails/productDetails";
import Shop from "./Pages/shop/shop"
import Gallery from "./Pages/gallery/gallery";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
// import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Banner/>
      <Hero/>
      <Home/>
      {/* <ProductDetails />
      <Cart/>
      <Gallery />
      <Shop /> */}
       {/* <Router>
       <Route exact path='/'>
        <Home />
        </Route>
        <Route path='/gallery'>
        <Gallery/>
        </Route>
     
    </Router> */}
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
