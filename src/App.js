import './App.css';
import Footer from './customer/component/Footer/Footer';
import Navigation from './customer/component/Navigation/Navigation';
import Product from './customer/component/Product/Product';
import HomePage from './customer/Pages/HomePage/HomePage';

function App() {
  return (
    <div className="">
      
      <Navigation/>

      <div>
        <HomePage/>
        <Product/>
      </div>
      <Footer/>
    </div> 

   
  );
}

export default App;
