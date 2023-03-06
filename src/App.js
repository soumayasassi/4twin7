import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Product from './components/Product';
import Products from './components/Products';
import CycleDeVie from './ExampleCours/CycleDeVie';
import ProductsFunc from './consommation/ProductsFunc';
import { Routes ,Route } from 'react-router-dom';
import NotFound from './consommation/NotFound';
import NavBarComponent from './consommation/NavBarComponent';
import ProductDetails from './consommation/ProductDetails';
 
function App() {
  return (
    <div className="App">
{/* <Binding></Binding>
      <CycleDeVie favCol="yellow"/>
      <Products>
      <ProductsFunc/>*/}
      <NavBarComponent/>
 <Routes>
 <Route  path='/products'>
<Route index  element={<ProductsFunc/>}/>
  <Route path=':id' element={<ProductDetails/>}/>
 </Route>
<Route  path='*' element={<NotFound/>}/>

 </Routes>

</div>
  )
}

export default App;
