import './App.css';

function App() {
  return (
    <>
      {' '}
      <Routes>
        <Route path="/" element={<Sidbar />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="setting" element={<Setting />} />
          <Route path="hide" element={<HideProducts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
