import logo from './logo.svg';
import './App.css';

import Cart from './components/Cart';
import Header from './components/Header';
import Product from './components/Product';

function App() {
  const bok1 = "En magisk värld fylld av trollkarar och häxor. Följ dem tre ungdomarna som räddar världen";
  const bok2 = "Den unga pojken har svårt att kontrollera sitt temprament och stöter på en del motgångar på en internatskola i Sverige.";

  return (
    <div className="App">
      <Header><Cart></Cart></Header>
      <Product title="Harry Potter" author="J.K. Rowling" description={bok1} />
      <Product title="Ondskan" author="Jan Guillou" description={bok2} />
    </div>
  );
}

export default App;
