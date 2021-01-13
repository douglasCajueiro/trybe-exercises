import React from 'react';
import PokemonCard from './PokemonCard';

class Pokedex extends React.Component {
  render() {
    const pokemonsList = this.props.pokemons;
    
    return (
      <div className="pokedex-container">
      {pokemonsList.map((currPokemon) => 
        <PokemonCard pokemons={currPokemon} />)
      }
      </div>
    );
    
  }
}
export default Pokedex;