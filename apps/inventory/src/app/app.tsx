import { Route, Routes } from 'react-router-dom';

// importing the component from the library
import { Products } from '@react-monorepo/products';

function Home() {
  return <h1>Inventory</h1>;
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/orders" element={<Products />}></Route>
    </Routes>
  );
}

export default App;
