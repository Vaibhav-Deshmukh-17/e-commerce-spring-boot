import './App.css';
import Footer from './customer/component/Footer/Footer';
import Navigation from './customer/component/Navigation/Navigation';
import HomePage from './customer/Pages/HomePage/HomePage';

function App() {
  return (
    <div className="">
      
      <Navigation/>

      <div>
        <HomePage/>
      </div>
      <Footer/>
    </div> 

   
  );
}

export default App;
