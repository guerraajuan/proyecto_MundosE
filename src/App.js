// import { Fragment } from 'react';
import './App.scss';
import Header from './components/header/Header';
import About from './components/about/About';
import Products from './components/products/Products';
import Formulario from './components/formulario/Formulario';
import Services from './components/services/Services';
import Footer from './components/footer/Footer';



function App() {
  return (
    <div className="App">
      <Header/>
      <About/> 
      <Products/>
      <Services/> 
      <Formulario/>
      {/* <Footer/>  */}
     
    </div>
  );
}

export default App;
