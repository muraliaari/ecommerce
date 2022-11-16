import React from 'react'
import Header from '../partials/Header';
import Banner from '../partials/Banner';
import ProductList from '../partials/ProductList';
import Footer from '../partials/Footer';
import {useState} from "react"

const Home = () => {
    const [state,setState] = useState([])

    const AddTocart=(title)=>{
      console.log("calllleelelelle")
      setState([...state,title])
    }

  return (
    <div>
        <Header state={state}/>
      <Banner/>
      <ProductList AddTocart={AddTocart}/>
      <Footer/>
    </div>
  )
}

export default Home