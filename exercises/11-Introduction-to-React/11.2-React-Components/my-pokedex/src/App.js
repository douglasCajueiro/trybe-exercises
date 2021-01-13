import {pokemons} from './data';

import Pokedex from './components/Pokedex';


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Pokedex pokemons={pokemons}/>
      </header>
    </div>
  );
}

export default App;
