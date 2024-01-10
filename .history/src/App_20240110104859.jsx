import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Test from './Pages/Test';

function App() {
  return (
    <>
      {' '}
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Test />} />
          {/* <Route path="products" element={<Products />} />
          <Route path="setting" element={<Setting />} />
          <Route path="hide" element={<HideProducts />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
