
import { useState } from 'react'
import './App.css'
import Laskuri from './Laskuri'
import CustomerList from './CustomerList'
import ProductList from './ProductList'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Navbar'


function App() {

  return (
    <>
        <NavBar/>

        <h1>Northwind Corporation</h1>

        <Laskuri />
        <br/>
        <ProductList />
        <br/>
        <CustomerList />
     
        
    </>
  )
}

export default App
