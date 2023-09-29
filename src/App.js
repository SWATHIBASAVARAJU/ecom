
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {Routes,Route} from 'react-router-dom'
import Wprentals from './components/Wprentals';
import Home from './components/Home';
import Demos from './components/Demos';
import Properties from './components/Properties';
import Owners from './components/Owners';
import Features from './components/Features';
import Pages from './components/Pages';
import Nav from './components/Nav';
import Login from './components/Login';
import Signup from './components/Signup';
import Submitproperty from './components/Submitproperty';



function App() {
  return (
    <div className="App">
       <Nav/>
      <Routes >
      <Route path='/wprentals' element={<Wprentals/>}/> 
      <Route path='/home' element={<Home/>}/>
      <Route path='/demos' element={<Demos/>}/>
      <Route path='/properties' element={<Properties/>}/>
      <Route path='/owners' element={<Owners/>}/>
      <Route path='/features' element={<Features/>}/>
      <Route path='/pages' element={<Pages/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/submitproperty' element={<Submitproperty/>}/>
     
    </Routes>
     
    </div>
  );
}

export default App;
