import React from 'react';
import './App.css';
import pokemonList from './data';
import Pokemon from './components/Pokemon';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Exercise - Pokedex</h1>
        <ul>
          <Pokemon pokemon={ pokemonList[0] } />
        </ul>
      </>
    );
  }
}

export default App;
