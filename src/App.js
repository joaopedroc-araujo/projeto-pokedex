import React from 'react';
import pokemonList from './data';
import Pokedex from './components/Pokedex';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <Pokedex pokemonList={ pokemonList } />
        </ul>
      </div>
    );
  }
}

export default App;
