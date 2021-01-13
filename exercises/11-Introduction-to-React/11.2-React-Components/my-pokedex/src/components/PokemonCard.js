import React from 'react';

class PokemonCard extends React.Component {
  render() {
    const {name, type, averageWeight, image} = this.props.pokemons;
    const {value, measurementUnit} = averageWeight;

    return (
      <div className="pokemon-card">
        <img className="pokemon-img" src={image} alt={name}/>
        <div className="pokemon-description">
          <p> {name} </p>
          <p> {type} </p>
          <p> Average weight: {value} {measurementUnit} </p>
        </div>
      </div>
    )
  }
}

export default PokemonCard;