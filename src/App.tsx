import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
    <Route path="/" element={<Home />} />
    <Route path='cart' element={<Cart />} />
    <Route path='checkout' element={<Checkout />} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
