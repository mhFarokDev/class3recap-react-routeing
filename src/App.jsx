import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Team from './Pages/Team/Team';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Product from './Pages/Product/Product';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import NotFound from './Pages/404/NotFound';

function App() {
  return (
    <div className=''>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/shop' element={<Product/>}/>
          <Route path='/shop/:id' element={<SingleProduct/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
