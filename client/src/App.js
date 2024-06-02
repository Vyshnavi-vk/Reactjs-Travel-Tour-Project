import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'


function App() {
  return (
    <BrowserRouter>
      <div div className="App" >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        {/* <Navbar /> */}
      </div>
    </BrowserRouter >
  );
}

export default App;
