import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Product from './components/Product';
import Products from './components/Products';
import CycleDeVie from './ExampleCours/CycleDeVie';
import ProductsFunc from './components/ProductsFunc';
import { Routes ,Route } from 'react-router-dom';
import NotFound from './part2/NotFound';
import NavBarComponent from './part2/NavBarComponent';
import ProductDetails from './part2/ProductDetails';
 
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
  <Route path=':name' element={<ProductDetails/>}/>
 </Route>
<Route  path='*' element={<NotFound/>}/>

 </Routes>

</div>
  )
}

export default App;
