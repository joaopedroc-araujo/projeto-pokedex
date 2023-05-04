import React from 'react';
import pokemonList from './data';
import Pokedex from './components/Pokedex';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Exercise - Pokedex</h1>
        <ul>
          <Pokedex pokemonList={ pokemonList } />
        </ul>
      </>
    );
  }
}

export default App;
