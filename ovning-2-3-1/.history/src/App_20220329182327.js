import logo from './logo.svg';
import './App.css';

import Cart from './components/Cart';
import Header from './components/Header';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Product title="Harry Potter" author="J.K. Rowling" />
    </div>
  );
}

export default App;
