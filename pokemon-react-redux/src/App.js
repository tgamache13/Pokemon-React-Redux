import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Welcome from './components/welcome';
import pokemonList from './components/pokemonList';


function App() {
  return (
    <div className="App">
      Pokemon React-Redux Project
      <Welcome />
      <Route path='/pokemon-list' component={pokemonList} />
    </div>
  );
}

export default App;
