import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Product from './components/Product';
import Contact from './contact';
import Aboutus from './Aboutus';

function HomePage() {
  return (
    <div>
      <div className="App">
        <Product
        
        id='ourwork'/>
      </div>
      <br/>
      <br/>
     
      <div>
        <Contact
        id='contact'/>
      </div>
      
      <br/>
      <br/>
      <br/>
      <br/>

      <br/>
      <br/>
      <div>
        <Aboutus
        id='aboutusdiv'/>
      </div>
      <div>
         <Footer />
      </div>
     < br/>
      <br/>
      <br/>
      
      <br/>
    </div>
  );
}

export default HomePage;
