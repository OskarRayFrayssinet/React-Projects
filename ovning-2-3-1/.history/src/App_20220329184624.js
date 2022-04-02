import logo from './logo.svg';
import './App.css';

import Cart from './components/Cart';
import Header from './components/Header';
import Product from './components/Product';

function App() {
  const bok1 = "En magisk värld fylld av trollkarar och häxor";
  return (
    <div className="App">
      <Product title="Harry Potter" author="J.K. Rowling" description={bok1} />
    </div>
  );
}

export default App;
