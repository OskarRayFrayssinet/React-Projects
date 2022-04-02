import './App.css';
import Booking from './components/Booking';
import Transport from './components/Transport';

function App() {
  return (
    <div className="App">
      <Booking>
        <Transport />
      </Booking>
    </div>
  );
}

export default App;
