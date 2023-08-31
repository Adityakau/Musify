import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Components/pages/Home';
import Arijit from './Components/pages/Arijit';
import SignUp from './Components/pages/SignUp';
import Footer from './Components/Footer';
import Sid from './Components/pages/Sid';
import Anirudh from './Components/pages/Anirudh';
import Rithviz from './Components/pages/Rithviz';
import ARrahman from './Components/pages/ARrahman';

function App() {
  return (
    <>
     <Router>
        <Navbar/>
        <Routes>
        <Route path='/' exact element={ <Home/>}></Route>
        <Route path='/arijit' element={ <Arijit/>}></Route>
        <Route path='/Sidsriram' element={ <Sid/>}></Route>
        <Route path='/anirudh' element={ <Anirudh/>}></Route>
        <Route path='/Rithviz' element={ <Rithviz/>}></Route>
        <Route path='/ARrahman' element={ <ARrahman/>}></Route>
        <Route path='/sign-up' element={ <SignUp/>}></Route>
        </Routes>
        <Footer/>
     </Router>
     
    </>
  );
}

export default App;
