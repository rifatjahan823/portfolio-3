import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Home from './Component/Home/Home';
import Navebar from './Component/Navebar/Navebar';

function App() {
  return (
    <div >
      <Navebar></Navebar>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
