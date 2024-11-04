import logo from './logo.svg';
import './App.css';
import Hello from './Hello'
// import asdf from './Hello'
import HelloClass from './HelloClass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello></Hello>
        {/* <asdf></asdf> */}
        <HelloClass></HelloClass>
        
      </header>
    </div>
  );
}

export default App;
