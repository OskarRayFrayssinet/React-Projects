import logo from './logo.svg';
import './App.css';

import Cart from './components/Cart';
import Header from './components/Header';
import Product from './components/Product';

function App() {
  const bok1 = "En magisk värld fylld av trollkarar och häxor. Följ dem tre ungdomarna som räddar världen";

  return (
    <div className="App">
      <Product title="Harry Potter" author="J.K. Rowling" description={bok1} />
      <Product title="Ondskan" />
    </div>
  );
}

export default App;
