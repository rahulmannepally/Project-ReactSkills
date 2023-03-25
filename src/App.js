import './App.css';
import Navbar from './components/Navbar';
import Projects from './components/pages/play/Projects';
import Merch from './components/pages/shop/Merch';
// import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import {Route, Routes} from "react-router-dom"

function App() {
 
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Projects />} />
          <Route path="/merch" element={<Merch />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
