import React from 'react';
import PropTypes from 'prop-types';
// import pokemonList from '../data';
import Pokemon from './Pokemon';

function Pokedex({ pokemonList }) {
  return (
    <div style={ { textAlign: 'center' } }>
      <h1>Pokédex</h1>
      <ul
        data-testid="my-action"
        style={ { display: 'flex', flexWrap: 'wrap', padding: 0, listStyleType: 'none' } }
      >
        {pokemonList.map((pokemon) => (
          <Pokemon
            key={ pokemon.id }
            pokemon={ pokemon }
          />
        ))}
      </ul>
    </div>
  );
}

Pokedex.propTypes = {
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      averageWeight: PropTypes.shape({
        value: PropTypes.number.isRequired,
        measurementUnit: PropTypes.string.isRequired,
      }).isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Pokedex;
