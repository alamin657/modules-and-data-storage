import logo from './logo.svg';
import './App.css';
import Cosmetics from './components/Cosmetics/Cosmetics';
import Shoes from './components/shoes/Shoes';

function App() {
  return (
    <div className="App">
      <Cosmetics></Cosmetics>
      <Shoes></Shoes>
    </div>
  );
}

export default App;