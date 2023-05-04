import React from 'react';
import pokemonList from './data';
import Pokedex from './components/Pokedex';
import './App.css';
import Pokemon from './components/Pokemon';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Exercise - Pokedex</h1>
        <ul>
          <Pokemon pokemon={ pokemonList[0] } />
          <Pokedex pokemonList={ pokemonList } />
        </ul>
      </>
    );
  }
}

export default App;
