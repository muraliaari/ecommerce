import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Product from './components/Product';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <ProductList/>
      
      <Footer/>
    </div>
  );
}

export default App;
