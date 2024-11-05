import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import HelloClass from './components/HelloClass';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Welcome name="Super Man" price="123"></Welcome>
        <Welcome name="Spider Man" price="453"></Welcome>
        <Welcome name="Iron Man" price="523"></Welcome>
        
        */}

        {/* <Counter ></Counter> */}

        <ParentComponent></ParentComponent>
     
      </header>
    </div>
  );
}

export default App;
