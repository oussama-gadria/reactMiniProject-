import './App.css';
import { Route, Routes } from 'react-router-dom';
import NotFound from './composantclass/NotFound';
import Products from './composantclass/Products'; 
import AddProduct from './composantclass/AddProduct';
import ProductDetails from './composantclass/ProductDetails';
import React from 'react';
import UpdateProduct from './composantclass/UpdateProduct';

const NavigationBar =React.lazy(()=>import('./composantclass/Navbar'));
function App() {
  return (
    <>
    <NavigationBar/>
   
     <Routes>
      <Route path="/products">
        <Route index element={<Products/>}/>
        <Route path=':id' element={<ProductDetails/>}/> 
        <Route path='add' element={<AddProduct/>}/> 
        <Route path='update/:id' element={<UpdateProduct/>}/> 
      </Route>
      <Route path="*" element={<NotFound/>}/>
     
     </Routes>
     </>
    
    
  );
}

export default App;
