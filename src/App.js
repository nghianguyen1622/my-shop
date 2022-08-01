import "./App.css";
import Home from "./component/Home";
import Products from "./component/AllProducts/Products";
import Navbar from "./component/Navbar";
import { Switch, Route} from "react-router-dom";
import Product from "./component/Detail/Product";
import Cart from "./component/Cart/Cart";
import "./component/AllProducts/Product.scss";
import "./component/Detail/Product.scss";
import "./component/Cart/Cart.scss";
import  Footer from "./component/footer/Footer";
import "./component/footer/footer.scss"
import Contact from "./component/Contact/Contact";
import "./component/Contact/Contact.scss";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} /> 
        <Route exact path="/cart" component={Cart} />
          <Route exact path="/products/:id" component={Product} /> 
          <Route exact path="/contact" component={Contact} />     
        <Home />   
      </Switch>
      <Footer/>
  
    </>
  );
}

export default App;
