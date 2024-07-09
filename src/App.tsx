import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Checkout2 from './pages/Checkout2';
import AddAddress from './pages/AddAddress';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AddressProvider } from './Context/GlobalContext';

function App() {
  return (
    <AddressProvider>
    <div className="App">
    <Router>
      <Routes>
    <Route path="/" element={<Home />} />
    <Route path='cart' element={<Cart />} />
    <Route path='checkout' element={<Checkout />} />
    <Route path='checkout2' element={<Checkout2 />} />
    <Route path='addaddress' element={<AddAddress />} />
    </Routes>
    </Router>
    </div>
    </AddressProvider>
  );
}

export default App;
