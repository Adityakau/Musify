import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Components/pages/Home';
import Services from './Components/pages/Services';
import Products from './Components/pages/Products';
import SignUp from './Components/pages/SignUp';
import Footer from './Components/Footer';

function App() {
  return (
    <>
     <Router>
        <Navbar/>
        <Routes>
        <Route path='/' exact element={ <Home/>}></Route>
        <Route path='/services' element={ <Services/>}></Route>
        <Route path='/products' element={ <Products/>}></Route>
        <Route path='/sign-up' element={ <SignUp/>}></Route>
        </Routes>
        <Footer/>
     </Router>
     
    </>
  );
}

export default App;
