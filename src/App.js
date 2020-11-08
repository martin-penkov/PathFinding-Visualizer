//import './App.css';

const { default: PathFinder } = require("./mainPathFinder");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Path Finding Visualizer</h1>
      </header>
      <body>
          <PathFinder></PathFinder>
      </body>
    </div>
  );
}

export default App;
