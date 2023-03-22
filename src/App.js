import './App.css';
import Navbar from './components/Navbar';
import Projects from './components/pages/projects/Projects';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import {Route, Routes} from "react-router-dom"

function App() {
 
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
