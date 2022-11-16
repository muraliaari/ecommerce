import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Product from './components/Product';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import {useState} from "react"

function App() {

  const [state,setState] = useState([])

  const AddTocart=(title)=>{
    console.log("calllleelelelle")
    setState([...state,title])
  }
  
  return (
    <div className="App">
      <Header state={state}/>
      <Banner/>
      <ProductList AddTocart={AddTocart}/>
      <Footer/>
    </div>
  );
}

export default App;
