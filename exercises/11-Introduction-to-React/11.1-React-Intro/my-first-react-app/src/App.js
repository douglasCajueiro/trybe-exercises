import logo from './logo.svg';
import './App.css';
import Title from './Component'

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const appointments = ['to spend time with my family', 'to solve puzzles','to juggle'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Title />
        </div>
        <ul>
          { task('to study')}
          { appointments.map(currTask => task(currTask))}
        </ul>
      </header>
    </div>
  );
}

export default App;
