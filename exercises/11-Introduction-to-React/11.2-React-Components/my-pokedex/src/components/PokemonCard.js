import React from 'react';

class PokemonCard extends React.Component {
  render() {
    const {name, type, averageWeight, image} = this.props.pokemons;
    const {value, measurementUnit} = averageWeight;

    return (
      <div className="pokemon-card">
        <div className="pokemon-img-container">
          <img className="pokemon-img" src={image} alt={name}/>
          <table className="pokemon-img-bg"></table>
        </div>
        
        <div className="pokemon-description">
          <p className="pokemon-name"> {name} </p>
          <p className="pokemon-type"> {type} </p>
          <p> Av. weight: {value} {measurementUnit} </p>
        </div>
      </div>
    )
  }
}

export default PokemonCard;