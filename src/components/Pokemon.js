import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import pokemonList from "../data";

class Pokemon extends Component {
  render() {
    const { pokemon } = this.props;
    const { id, name, type, averageWeight, image } = pokemon;

    return (
      <li
        data-testid="my-action"
        key={ id }
        style={ {
          border: '1px solid',
          borderRadius: '8px',
          margin: '10px',
          padding: '10px',
          width: '30%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        } }
      >
        <h2>{name}</h2>
        <p>{type}</p>
        <p>
          {averageWeight.value}
          {' '}
          {averageWeight.measurementUnit}
        </p>
        <img src={ image } alt={ `${name} sprite` } />
      </li>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }),
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Pokemon;
