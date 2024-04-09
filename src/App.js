/*import './App.css';*/
import Navbar from './components/Navbar/navbar'
import Shop from './pages/shop.jsx'
import ShopCategory from './pages/shopCategory.jsx'
import Product from './pages/Product.jsx'
import Cart from './pages/Cart.jsx'
import LoginSignUp from './pages/loginSignUp.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx';
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kids_banner from './components/Assets/banner_kids.png'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/jewellery' element={<ShopCategory  banner = {men_banner} category="jewellery"/>}/>
        <Route path='/sarees' element={<ShopCategory banner = {women_banner} category="sarees"/>}/>
        <Route path='/dresses' element={<ShopCategory banner = {kids_banner} category="dresses"/>}/>
        <Route path="/product/:productId" element={<Product/>}>
        </Route>  
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;