import './App.css';
import Home from './components/Default/Home';
import Greetings from './components/Greetings/Greetings';
import Zero, { One, Two } from './components/Named/Named';

function App() {
  return (
    <div className="App">
      <Greetings />
      <Home />
      <One />
      <Two />
      <Zero />
    </div>
  );
}

export default App;
