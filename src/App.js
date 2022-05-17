import './App.css';
import Footbar from './components/Footbar';
import HeaderBar from './components/HeaderBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Home />
      <Footbar />
    </div>
  );
}

export default App;
