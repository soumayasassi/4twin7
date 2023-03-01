import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Product from './components/Product';
//import Products from './components/Products';
import CycleDeVie from './ExampleCours/CycleDeVie';
import { Routes ,Route } from 'react-router-dom';
import React, { Suspense } from 'react';
const Products = React.lazy(()=> import('./components/ProductsFunc'))
const NotFound = React.lazy(()=> import('./part2/NotFound'))
const NavBarComponent = React.lazy(()=> import('./part2/NavBarComponent'))
const ProductDetails = React.lazy(()=> import('./part2/ProductDetails'))
function App() {
  return (
    <div className="App">
{/* <Binding></Binding>
      <CycleDeVie favCol="yellow"/>
      <Products>
      <ProductsFunc/>*/}
      <Suspense fallback={<p>Chargement ...</p>}>
      <NavBarComponent/>
 <Routes>
 <Route  path='/products'>
<Route index  element={<Products/>}/>
  <Route path=':name' element={<ProductDetails/>}/>
 </Route>
<Route  path='*' element={<NotFound/>}/>

 </Routes>
 </Suspense>
</div>
  )
}

export default App;
