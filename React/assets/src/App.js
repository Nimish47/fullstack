import jpgBig from '../src/assets/frenchFries.jpg'
import jpgSmall from '../src/assets/small.jpg'
import svgNew from '../src/assets/good.svg'
import './App.css';

function App() {

  return (
    <div className="App">
      <img src={jpgBig} className="App-logo" alt="big" />
      <img src={jpgSmall} className="App-logo" alt="small" />
      <img src={svgNew} className="App-logo" alt="old" />
    </div>
  );
}

export default App;
