import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
// import Test from './Pages/Test';
import Navbar from './Components/Navbar';
import Prescription from './Pages/Prescription';
import Laboratory from './Pages/Laboratory';
import Radiographic from './Pages/Radiographic';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/laboratory" element={<Laboratory />} />
        <Route path="/Radiographic" element={<Radiographic />} />
        <Route path="/Prescription" element={<Prescription />} />
        {/* <Route path="products" element={<Products />} />
          <Route path="setting" element={<Setting />} />
          <Route path="hide" element={<HideProducts />} /> */}
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
